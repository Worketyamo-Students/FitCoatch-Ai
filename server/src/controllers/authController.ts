import {  Response } from 'express';
import { registerUser, loginUser } from '../core/services/authService';
import { AuthenticatedRequest } from '../core/middlewares/authMiddleware';

export const authController = {
  register: async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
      const user = await registerUser(req.body);
      res.status(201).json({
        success: true,
        data: user,
        message: 'User registered successfully'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Registration failed',
        error: error.message
      });
    }
  },

  login: async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const { token } = await loginUser(email, password);
      
      res.json({
        success: true,
        data: { token },
        message: 'Login successful'
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Login failed',
        error: error.message
      });
    }
  }
};
