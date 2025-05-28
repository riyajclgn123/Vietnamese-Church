import { Request, Response } from 'express';
import admin from 'firebase-admin';
import { db, auth } from '../firebase';  // Use your exported initialized instances

// ✅ CREATE USER
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    if (!firstName || !lastName) {
      return res.status(400).json({ message: 'First and last name are required' });
    }

    // Check if user with this email already exists
    try {
      const userRecord = await auth.getUserByEmail(email);
      // If user exists, send conflict response
      return res.status(409).json({ message: 'Email is already in use' });
    } catch (error: unknown) {
      // If error.code is 'auth/user-not-found', it means email is not used yet, so continue
      if (error instanceof Error && (error as any).code === 'auth/user-not-found') {
        // user does not exist, proceed to create
      } else if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: 'Unknown error checking user email' });
      }
    }

    // Create user
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`,
    });

    await db.collection('users').doc(userRecord.uid).set({
      name: `${firstName} ${lastName}`,
      email,
      createdAt: new Date().toISOString(),
    });

    return res.status(201).json({ id: userRecord.uid, email });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error creating user:', error.message);
      return res.status(500).json({ message: error.message });
    } else {
      console.error('Unknown error creating user:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};

// ✅ LOGIN USER
export const loginUser = async (req: Request, res: Response) => {
  const { idToken } = req.body;

  try {
    // Verify the ID token and get the user's UID
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    // Get user record from Firebase Auth
    const userRecord = await auth.getUser(uid);
    const email = userRecord.email || '';
    const displayName = userRecord.displayName || '';
    const [firstName = '', lastName = ''] = displayName.split(' ');

    return res.status(200).json({ email, firstName, lastName, uid });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(401).json({ message: 'Invalid token', error: error.message });
    } else {
      return res.status(401).json({ message: 'Invalid token', error: 'Unknown error occurred' });
    }
  }
};

// ✅ GET POSTS
export const getPosts = async (req: Request, res: Response) => {
  try {
    const snapshot = await db.collection('posts').get();
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error getting posts', error: error instanceof Error ? error.message : error });
  }
};

// ✅ CREATE POST
export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, userId } = req.body;

    if (!title || !content || !userId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const postRef = await db.collection('posts').add({
      title,
      content,
      userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return res.status(201).json({
      id: postRef.id,
      title,
      content,
      userId,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating post', error: error instanceof Error ? error.message : error });
  }
};

// ✅ GET USERS
export const getUsers = async (req: Request, res: Response) => {
  try {
    const listUsersResult = await admin.auth().listUsers();
    const users = listUsersResult.users.map(user => ({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      disabled: user.disabled,
      metadata: user.metadata,
    }));
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error retrieving users',
      error: error instanceof Error ? error.message : error,
    });
  }
};
