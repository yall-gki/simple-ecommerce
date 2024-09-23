// routes/userRoutes.js
import express from 'express';
import authenticate from '../middleware/authMiddleware.js';
import { createAd } from '../controllers/productController.js';

const router = express.Router();

router.get('/',authenticate, createAd);
router.get("/:category", authenticate, createAd);
router.get("/:id", authenticate, createAd);

export default router;
