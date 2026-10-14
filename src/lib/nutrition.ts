import type { Meal } from '@/types/meal';
export const plateParts=(meal:Meal)=>({vegetables:Math.round(meal.nutrition.calories*.5),protein:Math.round(meal.nutrition.protein*4),carbs:Math.round(meal.nutrition.carbs*4)});
