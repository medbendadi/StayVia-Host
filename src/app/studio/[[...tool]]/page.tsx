// app/studio/[[...tool]]/page.tsx
'use client';

import React from 'react';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export const dynamic = 'force-dynamic'; // allow runtime behaviour; optional but safe

export default function StudioPage() {
  return <NextStudio config={config} />;
}
