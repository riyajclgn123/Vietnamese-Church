import express, { Request, Response } from 'express';
import { Router } from 'express';
import {
  getUsers,
  createUser,
  loginUser,
  getPosts,
  createPost,
} from '../controllers/apiController';

const router = express.Router();

// Helper to wrap async route handlers
const asyncHandler = (fn: any) => (req: Request, res: Response, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.get('/users', asyncHandler(getUsers));
router.post('/users', asyncHandler(createUser));
router.post('/login', asyncHandler(loginUser));
router.get('/posts', asyncHandler(getPosts));
router.post('/posts', asyncHandler(createPost));

export default router;