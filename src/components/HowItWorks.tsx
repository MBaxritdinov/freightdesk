const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    description:
      "Link your TMS, broker portals, and bank accounts. FreightDesk pulls loads, rates, and payments automatically.",
  },
  {
    number: "02",
    title: "AI Prepares Everything",
    description:
      "The AI matches loads to settlements, flags missing payments, and drafts invoices — no spreadsheets needed.",
  },
  {
    number: "03",
    title: "You Review & Approve",
    description:
      "Your head accountant reviews a clean dashboard and approves with one click. Done.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0a1628] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white text-xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
