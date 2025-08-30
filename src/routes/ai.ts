import express, { Router } from 'express';
    import { authenticate } from '../core/middlewares/authMiddleware';
    import { generateProgram, nutritionAdvice, weeklySummary } from '../core/services/aiService';

    const router: Router = express.Router();

    router.post('/generate-program', authenticate, async (req, res) => {
      try {
        const program = await generateProgram(req.user.userId);
        res.send({ program });
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
    });

    router.post('/nutrition-advice', authenticate, async (req, res) => {
      try {
        const advice = await nutritionAdvice(req.user.userId);
        res.send({ advice });
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
    });

    router.get('/weekly-summary', authenticate, async (req, res) => {
      try {
        const summary = await weeklySummary(req.user.userId);
        res.send({ summary });
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
    });

    export { router as aiRoutes };
