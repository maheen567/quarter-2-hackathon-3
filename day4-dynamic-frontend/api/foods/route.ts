import { NextResponse } from 'next/server';
import data from '@/Data/food.json';

export async function GET() {
  return NextResponse.json(data);
}