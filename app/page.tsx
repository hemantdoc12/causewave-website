'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { ArrowRight } from 'lucide-react';

export default function CausewaveHome() {
  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-20 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 mb-8 text-sm">
              <div className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></div>
              <span className="tracking-[2px] font-medium">TRUSTED BY 50+ LEADING COMPANIES</span>
            </div>

            <h1 className="text-[72px] md:text-[92px] leading-[0.9] font-bold tracking-tighter mb-8 font-playfair">
              CSR that<br />actually<br />changes lives.
            </h1>

            <p className="max-w-2xl text-2xl text-white/80 mb-12">
              We help companies build compliant, measurable, and deeply trusted CSR programs across health, education, livelihoods, and sustainability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.03 }}
                className="group inline-flex items-center justify-center gap-3 bg-white text-[#0F172A] px-10 py-4 rounded-3xl font-semibold text-lg hover:bg-[#F97316] hover:text-white transition-all">
                Start Your CSR Program
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Add more sections here */}
    </main>
  );
}