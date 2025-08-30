import prisma from '../config/prisma';
    import { z } from 'zod';

    const sportActivitySchema = z.object({
      activityType: z.string(),
      duration: z.number(),
      calories: z.number(),
      date: z.date(),
    });

    const nutritionActivitySchema = z.object({
      mealType: z.string(),
      foodItems: z.string(),
      calories: z.number(),
      date: z.date(),
    });

    const sleepActivitySchema = z.object({
      duration: z.number(),
      quality: z.string(),
      date: z.date(),
    });

    export const createSportActivity = async (userId: string, activity: z.infer<typeof sportActivitySchema>): Promise<SportActivity> => {
      const newActivity = await prisma.sportActivity.create({
        data: {
          userId,
          activityType: activity.activityType,
          duration: activity.duration,
          calories: activity.calories,
          date: activity.date,
        },
      });
      return newActivity;
    };

    export const createNutritionActivity = async (userId: string, activity: z.infer<typeof nutritionActivitySchema>): Promise<NutritionActivity> => {
      const newActivity = await prisma.nutritionActivity.create({
        data: {
          userId,
          mealType: activity.mealType,
          foodItems: activity.foodItems,
          calories: activity.calories,
          date: activity.date,
        },
      });
      return newActivity;
    };

    export const createSleepActivity = async (userId: string, activity: z.infer<typeof sleepActivitySchema>): Promise<SleepActivity> => {
      const newActivity = await prisma.sleepActivity.create({
        data: {
          userId,
          duration: activity.duration,
          quality: activity.quality,
          date: activity.date,
        },
      });
      return newActivity;
    };

    export const getSportActivities = async (userId: string): Promise<SportActivity[]> => {
      const activities = await prisma.sportActivity.findMany({ where: { userId } });
      return activities;
    };

    export const getNutritionActivities = async (userId: string): Promise<NutritionActivity[]> => {
      const activities = await prisma.nutritionActivity.findMany({ where: { userId } });
      return activities;
    };

    export const getSleepActivities = async (userId: string): Promise<SleepActivity[]> => {
      const activities = await prisma.sleepActivity.findMany({ where: { userId } });
      return activities;
    };
