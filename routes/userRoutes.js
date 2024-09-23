// routes/userRoutes.js
import express from 'express';
import { createUser, loginUser, logoutUser } from '../controllers/userController.js';
import authenticate from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.delete('/delete', authenticate);

export default router;
