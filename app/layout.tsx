import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['300','400','500','600','700'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['700'] });

export const metadata: Metadata = {
  title: 'Causewave Innovations | CSR Strategy & Impact',
  description: 'Helping companies build compliant, measurable, and deeply trusted CSR programs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#F8FAFC]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}