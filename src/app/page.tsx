'use client';

import React from 'react';
import HeroSection from '@/components/SECTIONS/HeroSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Hero Section (Includes Section2 overlap) */}
      <HeroSection />
    </main>
  );
}
