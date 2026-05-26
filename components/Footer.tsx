import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white/70 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 grid md:grid-cols-4 gap-y-12">
        <div>
          <div className="flex items-center gap-x-3 mb-6">
            <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center">
              <span className="text-[#0F766E] text-2xl font-bold tracking-tighter">C</span>
            </div>
            <span className="font-semibold text-white text-xl tracking-tight">Causewave</span>
          </div>
          <p className="text-sm max-w-[240px]">Creating waves of positive change through strategic corporate social responsibility.</p>
        </div>

        <div>
          <div className="font-semibold text-white mb-5">Services</div>
          <div className="space-y-3 text-sm">
            <div>CSR Strategy & Compliance</div>
            <div>Field Implementation</div>
            <div>Impact Measurement</div>
            <div>Stakeholder Communication</div>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white mb-5">Company</div>
          <div className="space-y-3 text-sm">
            <Link href="/about" className="block hover:text-white transition">About Us</Link>
            <Link href="/founder" className="block hover:text-white transition">Leadership</Link>
            <Link href="/insights" className="block hover:text-white transition">Insights</Link>
            <Link href="/contact" className="block hover:text-white transition">Contact</Link>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white mb-5">Connect</div>
          <div className="space-y-3 text-sm">
            <a href="#" className="block hover:text-white transition">LinkedIn</a>
            <a href="#" className="block hover:text-white transition">Twitter</a>
            <a href="#" className="block hover:text-white transition">Newsletter</a>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-y-4 text-xs">
        <div>© {new Date().getFullYear()} Causewave Innovations LLP. All rights reserved.</div>
        <div className="flex gap-x-6">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}