'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let st: ScrollTrigger;

    if (headerRef.current) {
      // Estado inicial: Escondido acima e invisível
      gsap.set(headerRef.current, { y: -100, opacity: 0 });

      // Dispara a animação quando a Section2 começa a aparecer
      st = ScrollTrigger.create({
        trigger: '#section-2-wrapper',
        start: 'top 10%', // Quando o topo da Section2 chega a 10% da tela
        onEnter: () => {
          gsap.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power4.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(headerRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.6,
            ease: 'power4.in',
          });
        },
      });
    }

    return () => {
      if (st) st.kill();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 py-2 px-6 md:px-12 flex items-center justify-end transition-colors duration-500"
    >
      {/* Blur e Background Glassmorphism */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md -z-10 border-b border-white/10" />

      {/* Logo Centralizado */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 md:w-28 h-10">
        <Image
          src="/logo.png"
          alt="Logo Miss"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Hamburger Icon à direita */}
      <button
        className="hover:bg-black/5 p-2 rounded-full transition-all duration-300 active:scale-95 group relative"
        aria-label="Menu"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="transition-transform duration-300 group-hover:rotate-12"
        >
          {/* Linha Vermelha */}
          <line x1="4" y1="6" x2="20" y2="6" stroke="#FF0000" />
          {/* Linha Verde */}
          <line x1="4" y1="12" x2="20" y2="12" stroke="#22C55E" />
          {/* Linha Roxa */}
          <line x1="4" y1="18" x2="20" y2="18" stroke="#9400D3" />
        </svg>
      </button>
    </header>
  );
}
