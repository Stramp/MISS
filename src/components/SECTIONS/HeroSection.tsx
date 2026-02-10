'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Section2 from './Section2';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (
      sectionRef.current &&
      bgRef.current &&
      logoRef.current &&
      section2Ref.current
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Zoom In do BG e Zoom Out do Logo
      tl.to(
        bgRef.current,
        {
          scale: 2.7,
          ease: 'power1.inOut',
        },
        0,
      );

      tl.to(
        logoRef.current,
        {
          scale: 0.5,
          ease: 'power1.inOut',
        },
        0.1,
      );

      // 2. Logo sobe para o topo
      tl.to(
        logoRef.current,
        {
          y: '-43vh',
          ease: 'power1.inOut',
        },
        0.13,
      ); // Começa no meio do processo (0.5 da timeline)

      // 3. Section 2 sobe
      tl.to(
        section2Ref.current,
        {
          y: '-100%',
          ease: 'none',
        },
        0.1,
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center z-0"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 -left-[17px] w-[calc(100%+17px)] h-full bg-center bg-cover bg-no-repeat will-change-transform"
        style={{ backgroundImage: "url('/bg-hero3.png')", scale: 1.05 }}
      />

      <div ref={logoRef} className="relative z-10 flex flex-col items-center">
        <div className="w-64 md:w-96">
          <Image
            src="/logo.png"
            alt="Logo"
            width={500}
            height={500}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
        <h2
          className="mt-4 text-white text-xl md:text-2xl font-medium tracking-[0.3em] uppercase text-center"
          style={{
            textShadow:
              '0px 0px 10px rgba(0,0,0,0.9), 0px 4px 15px rgba(0,0,0,1), 2px 2px 2px rgba(0,0,0,0.8)',
          }}
        >
          Ride the Rainbow
        </h2>
      </div>

      <div
        ref={section2Ref}
        className="absolute top-full left-0 w-full h-full z-20"
      >
        <Section2 />
      </div>
    </section>
  );
}
