export default function FreightDeskHero() {
  return (
    <section className="bg-[#0a1628] min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
          <span className="text-blue-400 text-sm font-medium">
            Built for Uzbek logistics companies
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          Replace your accounting team&apos;s spreadsheets with one smart
          dashboard
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Stop copying loads from QuickManage into Google Sheets. FreightDesk
          automates settlements, deductions, RTS invoicing, and driver
          breakdowns — so your head accountant approves what the AI prepares.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="inline-block px-8 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Book a Free Demo
          </a>
          <a
            href="#how-it-works"
            className="inline-block px-8 py-3.5 rounded-lg border-2 border-slate-400 text-slate-200 font-semibold text-lg hover:border-white hover:text-white transition-colors"
          >
            See How It Works
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Used by logistics firms in Tashkent · Works with RTS Financial &amp;
          QuickPay
        </p>
      </div>
    </section>
  );
}
