'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Section2() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Animação de entrada da própria seção (Slide Over Parallax)
      gsap.fromTo(
        containerRef.current,
        { y: 0 },
        {
          y: '-20vh',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-transparent pt-[7rem]">
      <div
        ref={containerRef}
        className="w-full min-h-screen bg-white rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-start p-6 pb-20"
      >
        <Image
          src="/bannerGIF.gif"
          alt="Logo"
          width={500}
          height={500}
          className="w-full h-auto object-contain drop-shadow-2xl rounded-t-[2rem]"
          priority
        />
        <div className="w-full h-full flex flex-col items-center justify-start">
          <h2 className="text-2xl font-bold mt-3 text-center">
            <span style={{ color: '#FF0000' }}>Cores</span>{' '}
            <span style={{ color: '#FF7F00' }}>Mágicas</span>{' '}
            <span style={{ color: '#22C55E' }}>para</span>{' '}
            <span style={{ color: '#3B82F6' }}>garotas</span>{' '}
            <span style={{ color: '#9400D3' }}>Mágicas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-6xl">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                className="banner-card overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                <Image
                  src={`/bannerCor${num}.png`}
                  alt={`Banner de cor ${num}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto block"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
