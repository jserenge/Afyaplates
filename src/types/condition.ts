import type { DietaryTag } from './meal';
export interface NutrientLimits { maxSodium?:number; maxSugar?:number; maxPotassium?:number; maxPhosphorus?:number }
export interface ClinicalCondition { id:string; name:string; slug:string; description:string; icon:string; strictness:'guided'|'strict'; nutrientLimits:NutrientLimits; allowedTags:DietaryTag[]; forbiddenTags:DietaryTag[]; plateRatio:{ vegetables:number; protein:number; carbs:number } }
