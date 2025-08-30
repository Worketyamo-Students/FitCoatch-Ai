import {  Response } from 'express';
import { generateProgram, nutritionAdvice, weeklySummary } from '../core/services/aiService';
import { AuthenticatedRequest } from '../core/middlewares/authMiddleware';

export const aiController = {
  generateProgram: async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {

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

    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to generate weekly summary',
        error: error.message
      });
    }
  }
};
