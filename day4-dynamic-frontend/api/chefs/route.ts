import { NextResponse } from 'next/server';
import data from '@/Data/chef.json';

export async function GET() {
  return NextResponse.json(data);
}