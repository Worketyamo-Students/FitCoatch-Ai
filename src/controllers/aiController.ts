import { Request, Response } from 'express';
import { generateProgram, nutritionAdvice, weeklySummary } from '../core/services/aiService';

export const aiController = {
  generateProgram: async (req: Request, res: Response): Promise<void> => {
    try {
      const program = await generateProgram(req.user.userId);
      res.json({
        success: true,
        data: { program },
        message: 'Program generated successfully'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to generate program',
        error: error.message
      });
    }
  },

  nutritionAdvice: async (req: Request, res: Response): Promise<void> => {
    try {
      const advice = await nutritionAdvice(req.user.userId);
      res.json({
        success: true,
        data: { advice },
        message: 'Nutrition advice generated successfully'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to generate nutrition advice',
        error: error.message
      });
    }
  },

  weeklySummary: async (req: Request, res: Response): Promise<void> => {
    try {
      const summary = await weeklySummary(req.user.userId);
      res.json({
        success: true,
        data: { summary },
        message: 'Weekly summary generated successfully'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to generate weekly summary',
        error: error.message
      });
    }
  }
};
