import prisma from '../config/prisma';
    import { z } from 'zod';

    const userSchema = z.object({
      name: z.string().optional(),
    });

    export const getUserProfile = async (userId: string): Promise<User> => {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) throw new Error('User not found');
      return user;
    };

    export const updateUserProfile = async (userId: string, updates: z.infer<typeof userSchema>): Promise<User> => {
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updates,
      });
      return updatedUser;
    };
