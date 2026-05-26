'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-screen-2xl mx-auto px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[#0F766E] text-sm tracking-[3px] mb-4">OUR STORY</div>
            <h1 className="text-6xl font-bold tracking-tight mb-8">Built for CSR work that has to hold up in the field</h1>
            <p className="text-2xl text-[#64748B]">Causewave combines deep CSR advisory experience with public-health leadership and hands-on implementation discipline.</p>
          </div>

          <div className="max-w-4xl mx-auto mt-20 grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-semibold text-2xl mb-6">Our Approach</h3>
              <div className="space-y-6 text-[#64748B]">
                <p>We believe CSR should move beyond compliance checkboxes. Our work focuses on programs that deliver measurable outcomes for communities while meeting the highest standards of governance and transparency.</p>
                <p>Every project we take on is designed with field realities in mind — from remote village health camps to skill development centers in semi-urban areas.</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6">What Sets Us Apart</h3>
              <ul className="space-y-4">
                {[
                  "Public health + development sector expertise",
                  "Strong focus on evidence and verification",
                  "Practical technology that actually helps delivery",
                  "Deep relationships with credible implementation partners"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[#0F766E] mt-1">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}