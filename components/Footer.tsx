import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white/70 py-16">
      <div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-4 gap-y-12">
        <div>
          <div className="flex items-center gap-x-3 mb-6">
            <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center">
              <span className="text-[#0F766E] text-2xl font-bold tracking-tighter">C</span>
            </div>
            <span className="font-semibold text-white text-xl tracking-tight">Causewave</span>
          </div>
          <p className="text-sm max-w-[220px]">Creating waves of positive change through strategic corporate social responsibility.</p>
        </div>

        <div>
          <div className="font-semibold text-white mb-4">Services</div>
          <div className="space-y-2.5 text-sm">
            <div>CSR Strategy & Compliance</div>
            <div>Field Implementation</div>
            <div>Impact Measurement</div>
            <div>Stakeholder Communication</div>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white mb-4">Company</div>
          <div className="space-y-2.5 text-sm">
            <Link href="/about" className="block hover:text-white transition">About Us</Link>
            <Link href="/founder" className="block hover:text-white transition">Leadership</Link>
            <Link href="/insights" className="block hover:text-white transition">Insights</Link>
            <Link href="/contact" className="block hover:text-white transition">Contact</Link>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white mb-4">Connect</div>
          <div className="space-y-2.5 text-sm">
            <a href="#" className="block hover:text-white transition">LinkedIn</a>
            <a href="#" className="block hover:text-white transition">Twitter</a>
            <a href="#" className="block hover:text-white transition">Newsletter</a>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 text-xs text-center">
        © {new Date().getFullYear()} Causewave Innovations LLP. All rights reserved.
      </div>
    </footer>
  );
}