const tiers = [
  {
    name: "Starter",
    price: "$100",
    description: "Everything you need to stop using spreadsheets",
    features: [
      "Load tracking & entry",
      "Automated driver settlements",
      "Deduction calculations (fuel, tolls, repairs)",
      "Driver payment breakdowns",
      "Per-load paperwork checklist",
      "RTS Financial & QuickPay support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$200",
    description: "For growing fleets that want full automation",
    features: [
      "Everything in Starter",
      "QuickManage / Datatruck TMS integration",
      "Automated RTS submission prep",
      "Multi-accountant access",
      "Weekly financial reports",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0a1628] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          Pay less than the cost of one accountant. Cancel anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-8 ${
                tier.highlighted
                  ? "border-blue-500/50 bg-blue-500/5 ring-1 ring-blue-500/20"
                  : "border-slate-700/50 bg-[#0f1d33]"
              }`}
            >
              {tier.highlighted && (
                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">
                  {tier.price}
                </span>
                <span className="text-slate-500">/month</span>
              </div>
              <p className="text-slate-400 text-sm mt-2 mb-6">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-400 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`block w-full py-3 rounded-lg text-center font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-700/50 text-white hover:bg-slate-700"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#demo"
            className="inline-block px-8 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Book a Free Demo
          </a>
          <p className="text-slate-500 text-sm mt-3">
            No credit card required · 15-minute personalized walkthrough
          </p>
        </div>
      </div>
    </section>
  );
}
