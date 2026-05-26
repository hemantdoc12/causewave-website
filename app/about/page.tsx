'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-screen-2xl mx-auto px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-[#0F766E] text-sm tracking-[3px] mb-4">OUR STORY</div>
            <h1 className="text-6xl font-bold tracking-tight mb-8">Built for CSR Work That Has to Hold Up in the Field</h1>
            <p className="text-2xl text-[#64748B]">Causewave Innovations LLP combines CSR advisory, public-health leadership, and implementation discipline to help companies move from obligation to credible community outcomes. Technology is used where it improves monitoring, reporting, coordination, and communication.</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-semibold text-3xl mb-8">Our Approach</h3>
              <div className="space-y-6 text-[#64748B] text-lg">
                <p>We believe CSR should move beyond compliance checkboxes. Our work focuses on programs that deliver measurable outcomes for communities while meeting the highest standards of governance and transparency.</p>
                <p>Every project we take on is designed with field realities in mind — from remote village health camps to skill development centers in semi-urban areas.</p>
                <p>Technology is used where it improves monitoring, reporting, coordination, and communication — never as an end in itself.</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-3xl mb-8">What Sets Us Apart</h3>
              <div className="space-y-6">
                {[
                  { icon: "check-circle", text: "CSR strategy aligned to compliance, board expectations, and real program delivery" },
                  { icon: "check-circle", text: "Field-informed planning across health, education, livelihoods, sustainability, and community development" },
                  { icon: "check-circle", text: "Monitoring and evidence systems that make progress reviewable and credible" },
                  { icon: "check-circle", text: "Clear impact communication for companies, partners, and communities" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <i className={`fa-solid fa-${item.icon} text-[#0F766E] text-xl mt-1`}></i>
                    <span className="text-lg text-[#64748B]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}