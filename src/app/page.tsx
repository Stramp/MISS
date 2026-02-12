'use client';

import React from 'react';
import HeroSection from '@/components/SECTIONS/HeroSection';
import Section2 from '@/components/SECTIONS/Section2';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      {/* Hero Section (Includes Section2 overlap) */}
      <HeroSection />
      <div id="section-2-wrapper" className="relative z-20 mt-[50vh]">
        <Section2 />
      </div>
    </main>
  );
}
