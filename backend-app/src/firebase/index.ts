import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://vietnamese-church.firebaseio.com'
});

const db = admin.firestore();
const auth = admin.auth();

// Export them so other files can import
export { db, auth };