export default function Footer() {
  return (
    <footer className="bg-[#060e1a] border-t border-slate-800 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg">FreightDesk</p>
            <p className="text-slate-500 text-sm mt-1">
              Built for Uzbek logistics. Powered by AI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500">
            <a href="mailto:hello@freightdesk.ai" className="hover:text-white transition-colors">
              hello@freightdesk.ai
            </a>
            <span className="hidden sm:inline text-slate-700">·</span>
            <a href="#demo" className="hover:text-white transition-colors">
              Book a Demo
            </a>
            <span className="hidden sm:inline text-slate-700">·</span>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-slate-600 text-sm">
            FreightDesk &copy; 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
