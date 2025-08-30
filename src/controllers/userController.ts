import { Request, Response } from 'express';
import { getUserProfile, updateUserProfile } from '../core/services/userService';

export const userController = {
  getProfile: async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await getUserProfile(req.user.userId);
      res.json({
        success: true,
        data: user,
        message: 'Profile retrieved successfully'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to retrieve profile',
        error: error.message
      });
    }
  },

  updateProfile: async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await updateUserProfile(req.user.userId, req.body);
      res.json({
        success: true,
        data: user,
        message: 'Profile updated successfully'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to update profile',
        error: error.message
      });
    }
  }
};
