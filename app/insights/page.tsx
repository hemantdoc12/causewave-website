'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function InsightsPage() {
  const insights = [
    {
      title: "Chitta Express: Innovation in Last-Mile Health Delivery",
      category: "Health",
      date: "Jan 2026",
      excerpt: "How we helped a leading pharma company design and implement a mobile health initiative that reached 12,000+ beneficiaries in remote Rajasthan."
    },
    {
      title: "Building Trust Through Transparent Reporting",
      category: "Governance",
      date: "Dec 2025",
      excerpt: "A case study on how real-time dashboards and third-party verification helped one of India’s largest conglomerates achieve 100% board approval on their CSR report."
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
            <p className="text-xl text-[#64748B]">Real stories from the field — what works, what doesn’t, and how companies are creating meaningful impact.</p>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-8 pb-20 grid md:grid-cols-2 gap-8">
          {insights.map((post, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl border group cursor-pointer hover:border-[#0F766E] transition-colors">
              <div className="flex items-center gap-4 text-sm mb-6">
                <span className="px-4 py-1 bg-[#0F766E] text-white rounded-full text-xs">{post.category}</span>
                <span className="text-[#64748B]">{post.date}</span>
              </div>
              <h3 className="text-3xl font-semibold mb-4 group-hover:text-[#0F766E] transition-colors">{post.title}</h3>
              <p className="text-[#64748B] leading-relaxed">{post.excerpt}</p>
              <div className="mt-8 text-[#0F766E] font-medium flex items-center gap-2">
                Read case study <span className="group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}