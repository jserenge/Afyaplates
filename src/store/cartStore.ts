'use client';
import { create } from 'zustand';
import type { CartItem, Meal } from '@/types/meal';
import conditionsData from '@/data/conditions.json';
import type { ClinicalCondition } from '@/types/condition';
const conditions = conditionsData as ClinicalCondition[];
export type GuardrailVerdict={status:'ok'|'blocked'|'warning';message:string};
interface CartState { items:CartItem[]; safetyMode:string|null; addItem:(meal:Meal)=>GuardrailVerdict; removeItem:(id:string)=>void; setSafetyMode:(slug:string|null)=>void; clear:()=>void; totalItems:()=>number; totalPrice:()=>number }
const violation=(meal:Meal, condition:ClinicalCondition) => {
 const nutrient=meal.nutrition; const l=condition.nutrientLimits;
 return meal.tags.some(tag=>condition.forbiddenTags.includes(tag)) || (l.maxSodium!==undefined && nutrient.sodium>l.maxSodium) || (l.maxSugar!==undefined && nutrient.sugar>l.maxSugar) || (l.maxPotassium!==undefined && (nutrient.potassium??0)>l.maxPotassium) || (l.maxPhosphorus!==undefined && (nutrient.phosphorus??0)>l.maxPhosphorus);
};
export const useCartStore=create<CartState>((set,get)=>({items:[],safetyMode:null,setSafetyMode:(safetyMode)=>set({safetyMode}),clear:()=>set({items:[],safetyMode:null}),removeItem:(id)=>set(s=>({items:s.items.filter(i=>i.id!==id)})),totalItems:()=>get().items.reduce((n,i)=>n+i.quantity,0),totalPrice:()=>get().items.reduce((n,i)=>n+i.quantity*i.price,0),addItem:(meal)=>{const slug=get().safetyMode; const condition=conditions.find(c=>c.slug===slug); if(condition&&violation(meal,condition)){return {status:condition.strictness==='strict'?'blocked':'warning',message:`${meal.name} exceeds ${condition.name} guardrails and was not added.`};} set(s=>{const old=s.items.find(i=>i.id===meal.id);return {items:old?s.items.map(i=>i.id===meal.id?{...i,quantity:i.quantity+1}:i):[...s.items,{...meal,quantity:1}]}}); return {status:'ok',message:`${meal.name} added to cart.`};}}));
