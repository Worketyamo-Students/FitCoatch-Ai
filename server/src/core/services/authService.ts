import bcrypt from 'bcryptjs';
    import jwt from 'jsonwebtoken';
    import { envs } from '../config/env';
    import prisma from '../config/prisma';
    import { User } from '@prisma/client';
    import { z } from 'zod';

    const userSchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
      name: z.string().optional(),
    });

    export const registerUser = async (user: z.infer<typeof userSchema>): Promise<User> => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const newUser = await prisma.user.create({
        data: {
          email: user.email,
          password: hashedPassword,
          name: user.name,
        },
      });
      return newUser;
    };

    export const loginUser = async (email: string, password: string): Promise<{ token: string }> => {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) throw new Error('User not found');
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error('Invalid credentials');
      const token = jwt.sign({ userId: user.id }, envs.JWT_SECRET, { expiresIn: '1h' });
      return { token };
    };
