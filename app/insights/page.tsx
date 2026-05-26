'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function InsightsPage() {
  const insights = [
    {
      title: "Chitta Express: Innovation in Last-Mile Health Delivery",
      category: "Health",
      date: "Jan 2026",
      excerpt: "How we helped a leading pharma company design and implement a mobile health initiative that reached 12,000+ beneficiaries in remote Rajasthan villages. The program combined telemedicine, community health workers, and real-time data tracking to achieve 94% patient follow-up rate.",
      impact: "12,000+ beneficiaries • 94% follow-up rate • 3 states scaled"
    },
    {
      title: "Building Trust Through Transparent Reporting",
      category: "Governance",
      date: "Dec 2025",
      excerpt: "A case study on how real-time dashboards and third-party verification helped one of India’s largest conglomerates achieve 100% board approval on their CSR report for the first time in 8 years. The system reduced reporting time by 60% while increasing credibility with regulators.",
      impact: "100% board approval • 60% faster reporting • Zero compliance issues"
    },
    {
      title: "From Obligation to Opportunity: Education CSR Transformation",
      category: "Education",
      date: "Nov 2025",
      excerpt: "Working with a major automotive company, we redesigned their education CSR program from scattered donations to a focused, measurable initiative across 45 schools. The program now tracks learning outcomes and has improved student retention by 28% in target areas.",
      impact: "45 schools • 28% retention improvement • 8,200 students impacted"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-screen-2xl mx-auto px-8 py-16">
          <div className="max-w-3xl">
            <div className="text-[#0F766E] text-sm tracking-[3px] mb-4">THOUGHT LEADERSHIP</div>
            <h1 className="text-6xl font-bold tracking-tight mb-6">Insights & Case Studies</h1>
            <p className="text-xl text-[#64748B]">Real stories from the field — what works, what doesn’t, and how companies are creating meaningful, measurable impact through CSR.</p>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-8 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((post, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl border group cursor-pointer hover:border-[#0F766E] transition-all flex flex-col">
              <div className="flex items-center gap-4 text-sm mb-6">
                <span className="px-4 py-1 bg-[#0F766E] text-white rounded-full text-xs font-medium">{post.category}</span>
                <span className="text-[#64748B]">{post.date}</span>
              </div>
              
              <h3 className="text-3xl font-semibold mb-6 group-hover:text-[#0F766E] transition-colors flex-1">{post.title}</h3>
              
              <p className="text-[#64748B] leading-relaxed mb-8 flex-1">{post.excerpt}</p>
              
              <div className="mt-auto pt-6 border-t">
                <div className="text-sm font-semibold text-[#0F766E] mb-2">KEY IMPACT</div>
                <div className="text-sm text-[#64748B]">{post.impact}</div>
                
                <div className="mt-6 text-[#0F766E] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read full case study <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-screen-2xl mx-auto px-8 text-center py-12 border-t">
          <p className="text-[#64748B] mb-4">Want to explore more case studies or discuss your own CSR challenges?</p>
          <a href="/contact" className="inline-flex items-center gap-2 text-[#0F766E] font-semibold hover:underline">
            Get in touch <span>→</span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}