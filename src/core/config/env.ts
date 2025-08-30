import 'dotenv/config';
    import { get } from 'env-var';

    export const envs = {
      PORT: get('PORT').required().asPortNumber(),
      API_PREFIX: get('DEFAULT_API_PREFIX').default('/api/v1').asString(),
      NODE_ENV: get('NODE_ENV').default('development').asString(),
      DATABASE_URL: get('DATABASE_URL').required().asString(),
      JWT_SECRET: get('JWT_SECRET').required().asString(),
    };
