import express, { Router } from 'express';
import { authenticate } from '../core/middlewares/authMiddleware';
import { activityController } from '../controllers/activityController';

const router: Router = express.Router();

router.post('/sport', authenticate, activityController.createSport);
router.get('/sport', authenticate, activityController.getSportActivities);
router.post('/nutrition', authenticate, activityController.createNutrition);
router.get('/nutrition', authenticate, activityController.getNutritionActivities);
router.post('/sleep', authenticate, activityController.createSleep);
router.get('/sleep', authenticate, activityController.getSleepActivities);

export { router as activityRoutes };
