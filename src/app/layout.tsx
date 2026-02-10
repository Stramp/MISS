import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeRegistry from '@/components/Providers/ThemeRegistry';
import { SmoothScroll } from '@/components/Providers/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Premium Next.js Project',
  description: 'A high-performance project with GSAP, Framer Motion, and MUI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeRegistry>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeRegistry>
      </body>
    </html>
  );
}
