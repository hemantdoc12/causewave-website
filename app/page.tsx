'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CausewaveHome() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[100dvh] flex items-center pt-20 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:5px_5px]"></div>
        
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

              <motion.a 
                href="#impact" 
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center gap-3 border border-white/40 hover:bg-white/10 px-10 py-4 rounded-3xl font-semibold text-lg transition-all">
                See Real Impact
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b py-6">
        <div className="max-w-screen-2xl mx-auto px-8 flex flex-wrap justify-center items-center gap-x-16 gap-y-6 text-sm text-[#64748B]">
          <div className="flex items-center gap-x-3"><Users className="text-[#0F766E]" /> <span className="font-medium">50+ Companies Transformed</span></div>
          <div className="flex items-center gap-x-3"><TrendingUp className="text-[#0F766E]" /> <span className="font-medium">₹10Cr+ CSR Impact Delivered</span></div>
          <div className="flex items-center gap-x-3"><Award className="text-[#0F766E]" /> <span className="font-medium">100% Compliance Success</span></div>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="max-w-screen-2xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <div className="text-[#0F766E] font-semibold tracking-[3px] text-sm mb-4">WHAT WE DO</div>
          <h2 className="section-header font-bold tracking-tight">End-to-end CSR<br />that delivers results</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'chart-line', title: 'CSR Strategy & Compliance', desc: 'Shape compliant, board-approved strategies aligned with real community needs.' },
            { icon: 'hands-helping', title: 'Field Implementation', desc: 'On-ground execution with verified partners across health, education & livelihoods.' },
            { icon: 'chart-bar', title: 'Impact Measurement & Reporting', desc: 'Robust monitoring and transparent reporting that satisfies boards and communities.' }
          ].map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="service-card bg-white p-10 rounded-3xl border group"
            >
              <div className="w-14 h-14 bg-[#0F766E] text-white rounded-2xl flex items-center justify-center mb-8">
                <i className={`fa-solid fa-${service.icon} text-3xl`}></i>
              </div>
              <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
              <p className="text-[#64748B] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="bg-[#0F172A] text-white py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#F97316] text-sm tracking-[3px] mb-4">PROVEN RESULTS</div>
              <h2 className="section-header font-bold tracking-tight mb-8">Real change.<br />Real numbers.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[ '50+', '₹10Cr+', '100%' ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 p-8 rounded-3xl"
                >
                  <div className="text-6xl font-bold text-[#F97316] mb-3">{stat}</div>
                  <div className="text-white/80">{['Companies Transformed', 'CSR Funds Deployed', 'Compliance Rate'][i]}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-screen-2xl mx-auto px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-header font-bold tracking-tight mb-6">Ready to build<br />meaningful CSR?</h2>
          <p className="text-xl text-[#64748B] mb-12">Let’s design a program that your company, board, and communities can be proud of.</p>

          <form className="space-y-6 text-left max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you within 24 hours.'); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-[#0F766E]" required />
              <input type="email" placeholder="Work Email" className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-[#0F766E]" required />
            </div>
            <input type="text" placeholder="Company Name" className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-[#0F766E]" />
            <textarea placeholder="Tell us about your CSR goals" rows={5} className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-[#0F766E]"></textarea>
            
            <button type="submit" className="w-full py-4 bg-[#0F766E] hover:bg-[#134E4B] text-white rounded-3xl font-semibold text-lg transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}