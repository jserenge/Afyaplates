export type PillarSlug = 'bakery' | 'everyday-prep' | 'clinical-care';
export type DietaryTag = 'keto'|'vegetarian'|'vegan'|'whole-grain'|'high-protein'|'high-fiber'|'low-sodium'|'low-sugar'|'low-potassium'|'low-phosphorus'|'high-sodium'|'high-sugar'|'high-potassium'|'high-phosphorus'|'high-spice'|'high-acid'|'renal-safe'|'diabetic-safe'|'hypertension-safe'|'gastritis-safe'|'kidney-safe';
export interface Nutrients { calories:number; protein:number; carbs:number; fat:number; sodium:number; sugar:number; potassium?:number; phosphorus?:number }
export interface Meal { id:string; name:string; slug:string; pillar:PillarSlug; category:string; description:string; price:number; image:string; nutrition:Nutrients; tags:DietaryTag[]; localIngredients:string[]; conditionIds:string[]; isStrictClinical:boolean }
export interface CartItem extends Meal { quantity:number }
