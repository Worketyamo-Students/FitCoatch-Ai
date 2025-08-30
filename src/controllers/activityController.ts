import { Request, Response } from 'express';
import {
  createSportActivity,
  getSportActivities,
  createNutritionActivity,
  getNutritionActivities,
  createSleepActivity,
  getSleepActivities
} from '../core/services/activityService';

export const activityController = {
  createSport: async (req: Request, res: Response): Promise<void> => {
    try {
      const activity = await createSportActivity(req.user.userId, req.body);
      res.status(201).json({
        success: true,
        data: activity,
        message: 'Sport activity created successfully'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to create sport activity',
        error: error.message
      });
    }
  },

  getSportActivities: async (req: Request, res: Response): Promise<void> => {
    try {
      const activities = await getSportActivities(req.user.userId);
      res.json({
        success: true,
        data: activities,
        message: 'Sport activities retrieved successfully'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to retrieve sport activities',
        error: error.message
      });
    }
  },

  createNutrition: async (req: Request, res: Response): Promise<void> => {
    try {
      const activity = await createNutritionActivity(req.user.userId, req.body);
      res.status(201).json({
        success: true,
        data: activity,
        message: 'Nutrition activity created successfully'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to create nutrition activity',
        error: error.message
      });
    }
  },

  getNutritionActivities: async (req: Request, res: Response): Promise<void> => {
    try {
      const activities = await getNutritionActivities(req.user.userId);
      res.json({
        success: true,
        data: activities,
        message: 'Nutrition activities retrieved successfully'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to retrieve nutrition activities',
        error: error.message
      });
    }
  },

  createSleep: async (req: Request, res: Response): Promise<void> => {
    try {
      const activity = await createSleepActivity(req.user.userId, req.body);
      res.status(201).json({
        success: true,
        data: activity,
        message: 'Sleep activity created successfully'
      });
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
      const activities = await getSleepActivities(req.user.userId);
      res.json({
        success: true,
        data: activities,
        message: 'Sleep activities retrieved successfully'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to retrieve sleep activities',
        error: error.message
      });
    }
  }
};
