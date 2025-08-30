import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { envs } from './core/config/env';
import { authRoutes } from './routes/auth';
import { userRoutes } from './routes/user';
import { activityRoutes } from './routes/activities';
import { aiRoutes } from './routes/ai';
import swaggerMiddleware from './core/middlewares/swaggerMiddleware';
import { errorHandler } from './core/middlewares/errorHandler';
import { notFoundHandler } from './core/middlewares/notFoundHandler';

const app: Application = express();

// Middleware
app.use(helmet());
app.use(
	cors({
		origin: process.env.ORIGIN,
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Expires', 'Pragma'],
		credentials: true
	})
);
app.use(morgan('dev'));
app.use(express.json());
app.use(
	rateLimit({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100 // limit each IP to 100 requests per windowMs
	})
);

// Routes
app.use(`${envs.API_PREFIX}/auth`, authRoutes);
app.use(`${envs.API_PREFIX}/user`, userRoutes);
app.use(`${envs.API_PREFIX}/activities`, activityRoutes);
app.use(`${envs.API_PREFIX}/ai`, aiRoutes);
app.use(`${envs.API_PREFIX}/api-docs`, swaggerMiddleware);

// Error Handling
app.use(errorHandler);
app.use(notFoundHandler);

// Start the server
app.listen(envs.PORT, () => {
	console.log(`Server running on port http://localhost:${envs.PORT}/`);
	console.log(`Documentation  : http://localhost:${envs.PORT}/api-docs`);
});
