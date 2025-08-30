import express, { Router } from 'express';
    import  authenticate  from '../core/middlewares/authMiddleware';
    import { generateProgram, nutritionAdvice, weeklySummary } from '../core/services/aiService';

    const router: Router = express.Router();

    router.post('/generate-program', authenticate, );

    router.post('/nutrition-advice', authenticate, );

    router.get('/weekly-summary', authenticate, );

    export { router as aiRoutes };
