const steps = [
  {
    number: "01",
    title: "Enter Loads Once",
    description:
      "No more copying between QuickManage, Datatruck, and Google Sheets. Enter each load once — load number, broker, driver, rates, and deductions — and FreightDesk handles the rest.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI Calculates Everything",
    description:
      "Settlements, fuel deductions, toll charges, repairs, RTS Financial factoring fees, and QuickPay 3% — all calculated automatically. No formulas, no spreadsheets.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Review, Approve & Send",
    description:
      "Your head accountant reviews a clean dashboard and approves with one click. Drivers get a transparent breakdown — no more weekend dispute calls.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0a1628] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          How It Works
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Three steps to replace your entire spreadsheet workflow
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={step.number} className="text-center relative">
              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-gradient-to-r from-blue-500/40 to-transparent" />
              )}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-6">
                {step.icon}
              </div>
              <div className="text-xs text-blue-400 font-mono mb-2">
                STEP {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
