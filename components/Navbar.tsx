'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/80">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 flex items-center justify-between h-[76px] md:h-20">
        <div className="flex items-center gap-x-4">
          <Link href="/" className="flex items-center">
            <div className="relative h-[48px] w-[150px] md:h-[56px] md:w-[170px] flex items-center">
              <Image 
                src="/logo_1.png" 
                alt="Causewave Innovations LLP" 
                width={170} 
                height={56}
                className="object-contain"
                priority
                onError={(e) => {
                  // Fallback to text logo if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'flex items-center gap-x-3';
                  fallback.innerHTML = `
                    <div class="w-9 h-9 bg-[#0F766E] rounded-2xl flex items-center justify-center">
                      <span class="text-white text-2xl font-bold tracking-tighter">C</span>
                    </div>
                    <div>
                      <div class="font-semibold text-xl tracking-tight text-[#0F172A]">Causewave</div>
                      <div class="text-[9px] text-[#64748B] -mt-1">INNOVATIONS LLP</div>
                    </div>
                  `;
                  target.parentNode?.appendChild(fallback);
                }}
              />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-x-10 text-sm font-medium">
          <Link href="#services" className="hover:text-[#0F766E] transition-colors">Services</Link>
          <Link href="#impact" className="hover:text-[#0F766E] transition-colors">Impact</Link>
          <Link href="#about" className="hover:text-[#0F766E] transition-colors">About</Link>
          <Link href="#contact" className="hover:text-[#0F766E] transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-x-4">
          <Link 
            href="#contact" 
            className="px-6 py-3 bg-[#0F766E] hover:bg-[#134E4B] text-white rounded-2xl font-semibold text-sm transition-all flex items-center gap-x-2"
          >
            Start Project
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden w-12 h-12 flex items-center justify-center text-[#0F766E] hover:bg-gray-100 rounded-xl transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t px-8 py-8">
          <div className="flex flex-col gap-y-6 text-lg font-medium">
            <Link href="#services" onClick={() => setIsOpen(false)} className="py-1">Services</Link>
            <Link href="#impact" onClick={() => setIsOpen(false)} className="py-1">Impact</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="py-1">About</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="py-1">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}