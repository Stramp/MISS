'use client';

import React from 'react';
import HeroSection from '@/components/SECTIONS/HeroSection';
import Section2 from '@/components/SECTIONS/Section2';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Hero Section (Includes Section2 overlap) */}
      <HeroSection />
      <div className="relative z-20 mt-[50vh]">
        <Section2 />
      </div>
    </main>
  );
}
