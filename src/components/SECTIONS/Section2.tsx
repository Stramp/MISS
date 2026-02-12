'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Section2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

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

      // 2. Animação de escala do vídeo ao passar do topo
      if (videoWrapperRef.current) {
        gsap.to(videoWrapperRef.current, {
          scaleX: 0.9,
          scaleY: 0.95,
          borderRadius: '2rem',
          ease: 'power1.ou',
          scrollTrigger: {
            trigger: videoWrapperRef.current,
            start: '-5% top', // Inicia quando o topo do vídeo toca o topo da tela
            end: '15% top', // Termina quando o meio do vídeo toca o topo da tela
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-transparent pt-[7rem]">
      <div
        ref={containerRef}
        className="w-full h-full bg-white rounded-t-[3rem] overflow-hidden flex flex-col items-center shadow-[0_-20px_50px_rgba(0,0,0,0.1)]"
      >
        {/* Vídeo em Tela Cheia com animação de escala */}
        <div
          ref={videoWrapperRef}
          className="w-full h-screen relative flex-shrink-0 will-change-transform origin-top"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videoMobileVerde.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>

        {/* Imagens das Modelos */}
        <div className="w-full relative pt-0 pb-20 px-6 flex flex-col items-center gap-10 bg-white">
          {/* Green Fairy Container */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="max-w-4xl w-full rounded-2xl overflow-hidden relative group shadow-[5px_8px_10px_rgba(0,0,0,0.6)]"
          >
            <Image
              src="/fairyGreenFotoModel.png"
              alt="Fairy Green Model"
              width={1200}
              height={1600}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-2 px-4 text-center">
              <h3
                className="text-white text-xl md:text-3xl uppercase tracking-[0.4em] font-bold drop-shadow-2xl"
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))',
                }}
              >
                Green Fairy
              </h3>
              <p
                className="text-white/80 text-[16px] md:text-xs tracking-[0.2em] font-light max-w-[80%]"
                style={{ filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))' }}
              >
                Para fadas que se derramam nos licores verde Neon
              </p>
            </div>
          </motion.div>

          {/* Spellbound Container */}
          <div className="max-w-4xl w-full rounded-2xl overflow-hidden relative group shadow-[5px_8px_10px_rgba(0,0,0,0.6)]">
            <Image
              src="/spellbound.png"
              alt="Spellbound Model"
              width={1200}
              height={1600}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-2 px-4 text-center">
              <h3
                className="text-white text-xl md:text-3xl uppercase tracking-[0.4em] font-bold drop-shadow-2xl"
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))',
                }}
              >
                Spellbound
              </h3>
              <p
                className="text-white/80 text-[15px] md:text-xs tracking-[0.2em] font-light max-w-[80%]"
                style={{ filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))' }}
              >
                Aquele Roxo misterioso que enfeitiça até as mais trevosas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
