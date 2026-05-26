'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
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

          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="text-sm tracking-[3px] text-[#0F766E] mb-4">GET IN TOUCH</div>
                
                <div className="space-y-10">
                  <div>
                    <div className="font-semibold mb-2">Office</div>
                    <div className="text-[#64748B]">Ahmedabad, Gujarat<br />India</div>
                  </div>

                  <div>
                    <div className="font-semibold mb-2">Email</div>
                    <a href="mailto:info@causewaveinnovations.com" className="text-[#0F766E] hover:underline">info@causewaveinnovations.com</a>
                  </div>

                  <div>
                    <div className="font-semibold mb-2">Phone</div>
                    <a href="tel:+917600596053" className="text-[#0F766E] hover:underline">+91 76005 96053</a>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t">
                  <div className="text-sm text-[#64748B]">We typically respond within 24 hours on business days.</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-16 rounded-3xl text-center">
                  <div className="text-7xl mb-8">🎉</div>
                  <h3 className="text-4xl font-semibold mb-4">Thank you!</h3>
                  <p className="text-xl text-[#64748B] max-w-sm mx-auto">We’ve received your message and will get back to you within 24 hours.</p>
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
                    <option value="communication">CSR Communication</option>
                  </select>

                  <textarea placeholder="Tell us about your CSR goals and challenges" rows={7} className="w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-[#0F766E]" required></textarea>

                  <button type="submit" className="w-full py-4 bg-[#0F766E] hover:bg-[#134E4B] text-white rounded-3xl font-semibold text-lg transition-all mt-4">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}