export default function FreightDeskHero() {
  return (
    <section className="bg-[#0a1628] min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          Replace your accounting team&apos;s spreadsheets with one smart dashboard
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Automates load tracking, driver settlements, and payment follow-ups
          for logistics firms — so your head accountant approves what the AI
          prepares, instead of building it from scratch.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="inline-block px-8 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Get a Free Demo
          </a>
          <a
            href="#how-it-works"
            className="inline-block px-8 py-3.5 rounded-lg border-2 border-slate-400 text-slate-200 font-semibold text-lg hover:border-white hover:text-white transition-colors"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
