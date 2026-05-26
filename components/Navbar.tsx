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
            <div className="relative h-[52px] w-[160px] md:h-[58px] md:w-[180px] flex items-center">
              <Image 
                src="/logo_1.png" 
                alt="Causewave Innovations LLP" 
                width={180} 
                height={58}
                className="object-contain"
                priority
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
            className="md:hidden w-11 h-11 flex items-center justify-center"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t px-8 py-8">
          <div className="flex flex-col gap-y-6 text-lg">
            <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#impact" onClick={() => setIsOpen(false)}>Impact</Link>
            <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}