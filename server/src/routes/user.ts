import express, { Router } from 'express';
import { authenticate } from '../core/middlewares/authMiddleware';
import { userController } from '../controllers/userController';

const router: Router = express.Router();

router.get('/profile', authenticate, userController.getProfile);
router.put('/profile', authenticate, userController.updateProfile);

export { router as userRoutes };
