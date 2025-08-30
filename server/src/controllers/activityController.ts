import {  Response } from 'express';
import {
  createSportActivity,
  getSportActivities,
  createNutritionActivity,
  getNutritionActivities,
  createSleepActivity,
  getSleepActivities
} from '../core/services/activityService';
import { AuthenticatedRequest } from '../core/middlewares/authMiddleware';

export const activityController = {
  createSport: async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {

    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to create sport activity',
        error: error.message
      });
    }
  },

  getSportActivities: async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {

    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to retrieve sport activities',
        error: error.message
      });
    }
  },

  createNutrition: async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {

    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to create nutrition activity',
        error: error.message
      });
    }
  },

  getNutritionActivities: async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {

    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to retrieve nutrition activities',
        error: error.message
      });
    }
  },

  createSleep: async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {

    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to create sleep activity',
        error: error.message
      });
    }
  },

  getSleepActivities: async (req: Request, res: Response): Promise<void> => {
    try {

    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to retrieve sleep activities',
        error: error.message
      });
    }
  }
};
