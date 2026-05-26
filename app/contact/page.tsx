'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-screen-2xl mx-auto px-8 py-20">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-6xl font-bold tracking-tight mb-6">Let’s build something meaningful together</h1>
            <p className="text-xl text-[#64748B]">Whether you’re planning your first CSR program or looking to strengthen an existing one, we’d love to hear from you.</p>
          </div>

          <div className="max-w-xl mx-auto">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-12 rounded-3xl text-center">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-3xl font-semibold mb-4">Thank you!</h3>
                <p className="text-[#64748B]">We’ve received your message and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-[#0F766E]" required />
                  <input type="email" placeholder="Work Email" className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-[#0F766E]" required />
                </div>
                <input type="text" placeholder="Company Name" className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-[#0F766E]" />
                
                <select className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-[#0F766E] text-[#64748B]" required>
                  <option value="">Select Service Interest</option>
                  <option value="strategy">CSR Strategy & Planning</option>
                  <option value="implementation">Program Implementation</option>
                  <option value="compliance">Compliance & Reporting</option>
                  <option value="measurement">Impact Measurement</option>
                </select>

                <textarea placeholder="Tell us about your CSR goals and challenges" rows={6} className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-[#0F766E]" required></textarea>

                <button type="submit" className="w-full py-4 bg-[#0F766E] hover:bg-[#134E4B] text-white rounded-3xl font-semibold text-lg transition-all">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}