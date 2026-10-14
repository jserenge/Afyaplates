import { NextResponse } from 'next/server'; import meals from '@/data/meals.json'; export function GET(){return NextResponse.json(meals)}
