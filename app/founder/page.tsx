'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FounderPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-screen-2xl mx-auto px-8 py-20">
          <div className="max-w-3xl">
            <div className="text-[#0F766E] text-sm tracking-[3px] mb-4">LEADERSHIP</div>
            <h1 className="text-6xl font-bold tracking-tight mb-8">Leadership with deep field experience</h1>
          </div>

          <div className="max-w-4xl mt-12">
            <div className="bg-white p-12 rounded-3xl border">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-48 h-48 bg-[#0F766E] rounded-3xl flex-shrink-0"></div>
                
                <div>
                  <div className="text-4xl font-semibold mb-2">Dr. Hemant Sharma</div>
                  <div className="text-[#0F766E] font-medium mb-8">Founder & Managing Partner</div>
                  
                  <div className="prose text-[#64748B]">
                    <p>With over 15 years in public health and development sector leadership, Hemant has advised Fortune 500 companies and leading Indian corporates on CSR strategy and implementation.</p>
                    <p className="mt-4">He previously led large-scale health and livelihood programs across multiple states and brings deep expertise in designing programs that work on the ground while meeting the highest standards of compliance and reporting.</p>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <a href="#" className="text-sm px-5 py-2 border rounded-full hover:bg-[#0F766E] hover:text-white transition">LinkedIn</a>
                    <a href="#" className="text-sm px-5 py-2 border rounded-full hover:bg-[#0F766E] hover:text-white transition">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}