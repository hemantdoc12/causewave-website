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
            <p className="text-2xl text-[#64748B]">Our work is grounded in real-world public health and development expertise — not just boardroom theory.</p>
          </div>

          <div className="max-w-5xl mt-16">
            <div className="bg-white p-12 md:p-16 rounded-3xl border">
              <div className="flex flex-col lg:flex-row gap-16">
                <div className="w-full lg:w-80 h-80 bg-[#0F766E] rounded-3xl flex-shrink-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-7xl mb-4">👨‍⚕️</div>
                    <div className="text-sm tracking-widest">DR. HEMANT SHARMA</div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-5xl font-semibold mb-2">Dr. Hemant Sharma</div>
                  <div className="text-[#0F766E] text-2xl font-medium mb-10">Founder & Managing Partner</div>

                  <div className="prose text-[#64748B] text-lg max-w-none space-y-6">
                    <p>With over 15 years in public health and development sector leadership, Hemant has advised Fortune 500 companies and leading Indian corporates on CSR strategy and implementation.</p>
                    
                    <p>He previously led large-scale health and livelihood programs across multiple states, designing and executing initiatives that reached hundreds of thousands of beneficiaries. His work has been recognized by SKOCH and IIM for excellence in social impact.</p>

                    <p>Hemant brings deep expertise in designing programs that work on the ground while meeting the highest standards of compliance, governance, and reporting — exactly what boards and regulators expect.</p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-[#0F766E] text-[#0F766E] rounded-2xl hover:bg-[#0F766E] hover:text-white transition text-sm font-medium">
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-[#0F766E] text-[#0F766E] rounded-2xl hover:bg-[#0F766E] hover:text-white transition text-sm font-medium">
                      <i className="fa-brands fa-twitter"></i> Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-20 text-center">
            <div className="text-[#0F766E] text-sm tracking-[3px] mb-4">PHILOSOPHY</div>
            <p className="text-3xl font-medium text-[#64748B] leading-tight">“CSR is not charity. It is strategic investment in communities that delivers measurable returns for business and society alike.”</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}