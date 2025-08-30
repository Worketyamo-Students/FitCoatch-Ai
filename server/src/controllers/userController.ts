import {  Response } from 'express';
import { getUserProfile, updateUserProfile } from '../core/services/userService';
import { AuthenticatedRequest } from '../core/middlewares/authMiddleware';

export const userController = {
  getProfile: async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {

    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to retrieve profile',
        error: error.message
      });
    }
  },

  updateProfile: async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {

    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to update profile',
        error: error.message
      });
    }
  }
};
