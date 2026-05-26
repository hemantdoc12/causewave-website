'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      title: "CSR Strategy & Compliance",
      icon: "chart-line",
      desc: "Shape CSR priorities, annual action plans, partner alignment, and reporting readiness around clear statutory and board expectations.",
      points: ["Annual Action Plans", "Board & Stakeholder Alignment", "Statutory Compliance", "Risk Assessment"]
    },
    {
      title: "Program Design & Budgeting",
      icon: "lightbulb",
      desc: "Design practical CSR initiatives across health, education, livelihoods, sustainability, and community development with measurable outputs and realistic budgets.",
      points: ["Needs Assessment", "Theory of Change", "Budget Planning", "KPI Definition"]
    },
    {
      title: "Field Implementation Support",
      icon: "hands-helping",
      desc: "Coordinate execution partners, milestones, beneficiary workflows, and ground-level reviews so plans become credible community outcomes.",
      points: ["Partner Vetting & Management", "Milestone Tracking", "Beneficiary Workflows", "Quality Assurance"]
    },
    {
      title: "Monitoring & Impact Reporting",
      icon: "chart-bar",
      desc: "Track progress, verify field evidence, and convert implementation data into concise reports for leadership, boards, and CSR committees.",
      points: ["Real-time Dashboards", "Evidence Collection", "Impact Verification", "Board-Ready Reports"]
    },
    {
      title: "Stakeholder Communication",
      icon: "comments",
      desc: "Prepare clear updates, case stories, and partner communication that explain what changed, who benefited, and why the work matters.",
      points: ["Impact Stories", "Annual Reports", "Board Presentations", "Community Updates"]
    },
    {
      title: "Practical Reporting Systems",
      icon: "clipboard-list",
      desc: "Use simple dashboards, documentation flows, and communication tools where they strengthen monitoring, reporting, and coordination.",
      points: ["Dashboard Development", "Data Workflows", "Training & Handover", "Sustainability Planning"]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-screen-2xl mx-auto px-8 py-16">
          <div className="max-w-3xl">
            <div className="text-[#0F766E] text-sm tracking-[3px] mb-4">OUR EXPERTISE</div>
            <h1 className="text-6xl font-bold tracking-tight mb-6">CSR Support Across the Full Program Cycle</h1>
            <p className="text-xl text-[#64748B]">From strategy and compliance to field execution, monitoring, reporting, and stakeholder communication — we support the complete CSR lifecycle with field-proven expertise.</p>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-8 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-10 rounded-3xl border hover:border-[#0F766E] transition-all group"
            >
              <div className="w-14 h-14 bg-[#0F766E] text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <i className={`fa-solid fa-${service.icon} text-3xl`}></i>
              </div>
              <h3 className="text-3xl font-semibold mb-6">{service.title}</h3>
              <p className="text-[#64748B] mb-8 leading-relaxed">{service.desc}</p>
              
              <div className="border-t pt-6">
                <div className="text-sm font-semibold text-[#0F766E] mb-4">KEY DELIVERABLES</div>
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <i className="fa-solid fa-check text-[#0F766E] mt-0.5"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}