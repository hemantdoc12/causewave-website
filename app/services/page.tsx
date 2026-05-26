'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      title: "CSR Strategy & Compliance",
      icon: "chart-line",
      desc: "We help companies design compliant, board-approved CSR strategies that align with both legal requirements and real community needs.",
      points: ["Annual Action Plans", "Board & Stakeholder Alignment", "Statutory Compliance", "Risk Assessment"]
    },
    {
      title: "Field Implementation Support",
      icon: "hands-helping",
      desc: "On-ground execution across health, education, livelihoods, sustainability, and community development programs.",
      points: ["Partner Vetting & Management", "Milestone Tracking", "Beneficiary Workflows", "Quality Assurance"]
    },
    {
      title: "Impact Measurement & Reporting",
      icon: "chart-bar",
      desc: "Robust monitoring systems and clear, credible reporting that satisfies boards, regulators, and communities.",
      points: ["Real-time Dashboards", "Evidence Collection", "Impact Verification", "Board-Ready Reports"]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-screen-2xl mx-auto px-8 py-16">
          <div className="max-w-3xl">
            <div className="text-[#0F766E] text-sm tracking-[3px] mb-4">OUR EXPERTISE</div>
            <h1 className="text-6xl font-bold tracking-tight mb-6">Services that create real impact</h1>
            <p className="text-xl text-[#64748B]">From strategy to execution to measurement — we support the full CSR lifecycle with field-proven expertise.</p>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-8 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl border"
            >
              <div className="w-14 h-14 bg-[#0F766E] text-white rounded-2xl flex items-center justify-center mb-8">
                <i className={`fa-solid fa-${service.icon} text-3xl`}></i>
              </div>
              <h3 className="text-3xl font-semibold mb-6">{service.title}</h3>
              <p className="text-[#64748B] mb-8">{service.desc}</p>
              
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-[#0F766E] mt-1"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}