'use client';

import React from 'react';

export default function Section2() {
  return (
    <section className="relative min-h-screen w-full bg-transparent pt-[7rem]">
      <div className="w-full h-[100vh] bg-white rounded-t-[2rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-start p-10">
        <h2 className="text-black text-4xl font-bold mt-20">
          Bem-vindo à Section 2
        </h2>
        <p className="text-slate-600 mt-4 text-xl">
          Esta div branca agora sobe por cima do Hero com bordas arredondadas e
          suavidade.
        </p>
      </div>
    </section>
  );
}
