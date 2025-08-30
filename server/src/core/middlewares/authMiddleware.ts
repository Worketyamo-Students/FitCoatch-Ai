import jwt from 'jsonwebtoken';
    import { envs } from '../config/env';
    import { Request, Response, NextFunction } from 'express';

     const authenticate = (req: Request, res: Response, next: NextFunction) => {
      const token = req.header('Authorization')?.replace('Bearer ', '');
      if (!token) return res.status(401).send({ message: 'Access denied. No token provided.' });

      try {
        const decoded = jwt.verify(token, envs.JWT_SECRET);
        req.user = decoded;
        next();
      } catch (err) {
        res.status(400).send({ message: 'Invalid token.' });
      }
    };
export default authenticate