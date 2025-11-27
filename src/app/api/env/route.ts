// src/app/api/env/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? null,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET ?? null,
  });
}
