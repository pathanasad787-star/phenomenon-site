import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Phenomenon Studio',
  description: 'A premium digital creative studio experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <SmoothScroll />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}