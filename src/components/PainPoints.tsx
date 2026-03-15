const cards = [
  {
    emoji: "📞",
    title: "Weekend Driver Disputes",
    problem:
      "Drivers call every weekend arguing about deductions. Your accountants spend hours on the phone explaining fuel charges and toll fees.",
    solution:
      "FreightDesk sends drivers a clear, itemized breakdown before they even ask. Most dispute calls disappear entirely.",
    color: "border-red-500/30 bg-red-500/5",
    iconBg: "bg-red-500/20",
  },
  {
    emoji: "📝",
    title: "Unsigned Paperwork Blocks RTS",
    problem:
      "One missing BOL signature or POD blocks RTS Financial from invoicing the load. You don't find out until it's too late.",
    solution:
      "Our per-load paperwork checklist flags missing documents in real time — before they become a billing problem.",
    color: "border-amber-500/30 bg-amber-500/5",
    iconBg: "bg-amber-500/20",
  },
  {
    emoji: "❌",
    title: "Manual Data Entry Errors",
    problem:
      "Wrong load number, wrong driver, wrong rate — all copied into Google Sheets and sent to RTS. Fixing it takes days.",
    solution:
      "FreightDesk validates every field at entry. Load numbers, rates, and driver assignments are checked before anything goes out.",
    color: "border-blue-500/30 bg-blue-500/5",
    iconBg: "bg-blue-500/20",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-[#0f1d33] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Pain Points We Solve
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Every Uzbek logistics company deals with these problems daily.
          FreightDesk eliminates all three.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-xl border p-6 ${card.color} transition-transform hover:-translate-y-1`}
            >
              <div
                className={`w-12 h-12 rounded-lg ${card.iconBg} flex items-center justify-center text-2xl mb-5`}
              >
                {card.emoji}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {card.problem}
              </p>
              <div className="border-t border-slate-700/50 pt-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  <span className="text-green-400 font-medium">
                    ✓ With FreightDesk:
                  </span>{" "}
                  {card.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
