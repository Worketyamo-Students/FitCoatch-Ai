import swaggerJSDoc from 'swagger-jsdoc';
    import { envs } from '../config/env';

    const options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'FitCoach AI API',
          version: '1.0.0',
          description: 'API for FitCoach AI',
        },
        servers: [
          {
            url: `http://localhost:${envs.PORT}/${envs.API_PREFIX}`,
          },
        ],
      },
      apis: ['./src/routes/*.ts'],
    };

    const swaggerSpec = swaggerJSDoc(options);

    export default swaggerSpec;
