import { PrismaClient } from '@prisma/client';

    export type User = PrismaClient['user'];
    export type SportActivity = PrismaClient['sportActivity'];
    export type NutritionActivity = PrismaClient['nutritionActivity'];
    export type SleepActivity = PrismaClient['sleepActivity'];
