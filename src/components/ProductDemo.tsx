"use client";

import { useState, useEffect, useRef } from "react";

const SCREENS = 4;
const SCREEN_DURATION = 6000;

const screenTitles = [
  "Load Entry — No More Google Sheets",
  "AI Settlement Calculator",
  "Paperwork Checklist — RTS Ready",
  "Driver Breakdown — No Disputes",
];

const navItems = ["Dashboard", "Loads", "Settlements", "Drivers"];
const activeNav = [1, 2, 2, 3];

const loads = [
  { id: "LD-7201", broker: "CH Robinson", driver: "A. Karimov", route: "CHI → DAL", gross: "$4,200", method: "RTS", status: "BOL ✓" },
  { id: "LD-7202", broker: "TQL", driver: "D. Yusupov", route: "ATL → MIA", gross: "$2,850", method: "QuickPay", status: "POD ✓" },
  { id: "LD-7203", broker: "Coyote", driver: "R. Alimov", route: "LAX → SEA", gross: "$5,100", method: "RTS", status: "BOL ✗" },
  { id: "LD-7204", broker: "Echo", driver: "S. Rustamov", route: "HOU → PHX", gross: "$3,350", method: "RTS", status: "POD ✓" },
  { id: "LD-7205", broker: "Uber Freight", driver: "M. Tursunov", route: "NYC → BOS", gross: "$2,600", method: "QuickPay", status: "BOL ✓" },
];

const settlements = [
  { load: "LD-7201", driver: "A. Karimov", gross: "$4,200", fuel: "-$380", tolls: "-$45", rts: "-$126", net: "$3,649", flag: null },
  { load: "LD-7202", driver: "D. Yusupov", gross: "$2,850", fuel: "-$210", tolls: "-$30", rts: "", net: "$2,525", flag: "QuickPay 3%" },
  { load: "LD-7203", driver: "R. Alimov", gross: "$5,100", fuel: "-$420", tolls: "-$60", rts: "-$153", net: "$4,467", flag: "Missing BOL" },
  { load: "LD-7204", driver: "S. Rustamov", gross: "$3,350", fuel: "-$290", tolls: "-$35", rts: "-$101", net: "$2,924", flag: null },
];

const paperworkItems = [
  { load: "LD-7201", bol: true, pod: true, rateConfirm: true, invoice: true },
  { load: "LD-7202", bol: true, pod: true, rateConfirm: true, invoice: false },
  { load: "LD-7203", bol: false, pod: false, rateConfirm: true, invoice: false },
  { load: "LD-7204", bol: true, pod: true, rateConfirm: true, invoice: true },
  { load: "LD-7205", bol: true, pod: true, rateConfirm: false, invoice: false },
];

function screenClasses(current: number, index: number) {
  const isActive = current === index;
  return `absolute inset-0 p-4 sm:p-6 transition-all duration-700 ease-in-out ${
    isActive
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4 pointer-events-none"
  }`;
}

/* ── Screen 0: Load Entry ─────────────────────────────── */
function LoadEntryScreen({ active }: { active: boolean }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm sm:text-base">
          Active Loads
        </h3>
        <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
          ● Synced from QuickManage
        </span>
      </div>

      <div className="grid grid-cols-6 gap-1 text-[9px] sm:text-xs text-slate-500 uppercase tracking-wider mb-2 px-2">
        <span>Load #</span>
        <span>Broker</span>
        <span>Driver</span>
        <span>Gross</span>
        <span>Method</span>
        <span>Docs</span>
      </div>

      <div className="flex-1 space-y-1.5 overflow-hidden">
        {loads.map((load, i) => (
          <div
            key={load.id}
            className="grid grid-cols-6 gap-1 text-[10px] sm:text-xs px-2 py-2 rounded-lg bg-[#162340]/60 border border-slate-700/30"
            style={{
              animation: active ? `slideInRow 0.5s ease-out ${i * 120}ms both` : "none",
              opacity: active ? undefined : 0,
            }}
          >
            <span className="text-blue-400 font-mono">{load.id}</span>
            <span className="text-slate-300 truncate">{load.broker}</span>
            <span className="text-slate-300 truncate">{load.driver}</span>
            <span className="text-white font-medium">{load.gross}</span>
            <span className={`${load.method === "RTS" ? "text-blue-400" : "text-amber-400"}`}>
              {load.method}
            </span>
            <span className={load.status.includes("✗") ? "text-red-400" : "text-green-400"}>
              {load.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Screen 1: AI Settlement Calculator ───────────────── */
function SettlementScreen({ active }: { active: boolean }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("");

  useEffect(() => {
    if (!active) { setProgress(0); setStatusText(""); return; }
    const timer = setTimeout(() => setProgress(100), 100);
    const fullText = "Calculating settlements... fuel, tolls, RTS fees, QuickPay 3%...";
    let idx = 0;
    const typeTimer = setInterval(() => {
      idx++;
      setStatusText(fullText.slice(0, idx));
      if (idx >= fullText.length) clearInterval(typeTimer);
    }, 40);
    return () => { clearTimeout(timer); clearInterval(typeTimer); };
  }, [active]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm sm:text-base">AI Settlement Calculator</h3>
        <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">Processing</span>
      </div>

      <div className="w-full h-1.5 bg-slate-700 rounded-full mb-1 overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full transition-all ease-linear" style={{ width: `${progress}%`, transitionDuration: "4500ms" }} />
      </div>
      <p className="text-[10px] sm:text-xs text-slate-500 font-mono mb-3 h-4">
        {statusText}<span className="animate-pulse">|</span>
      </p>

      <div className="grid grid-cols-7 gap-1 text-[8px] sm:text-[10px] text-slate-500 uppercase tracking-wider mb-1 px-2">
        <span>Load</span><span>Driver</span><span>Gross</span><span>Fuel</span><span>Tolls</span><span>RTS/QP</span><span>Net</span>
      </div>

      <div className="flex-1 space-y-1 overflow-hidden">
        {settlements.map((s, i) => (
          <div
            key={s.load}
            className="grid grid-cols-7 gap-1 text-[9px] sm:text-xs px-2 py-2 rounded-lg bg-[#162340]/60 border border-slate-700/30"
            style={{ animation: active ? `slideInRow 0.4s ease-out ${i * 200 + 500}ms both` : "none", opacity: active ? undefined : 0 }}
          >
            <span className="text-blue-400 font-mono">{s.load}</span>
            <span className="text-slate-300 truncate">{s.driver}</span>
            <span className="text-white">{s.gross}</span>
            <span className="text-red-400">{s.fuel}</span>
            <span className="text-red-400">{s.tolls}</span>
            <span className="text-amber-400">{s.rts || "-$86"}</span>
            <span className="text-green-400 font-medium">{s.net}</span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        <div className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-1 rounded animate-pulse">
          ⚠ LD-7203: Missing BOL — RTS invoice blocked
        </div>
        <div className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
          ℹ LD-7202: QuickPay 3% fee applied
        </div>
      </div>
    </div>
  );
}

/* ── Screen 2: Paperwork Checklist ────────────────────── */
function PaperworkScreen({ active }: { active: boolean }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm sm:text-base">Paperwork Checklist</h3>
        <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">RTS Financial Ready</span>
      </div>

      <div className="grid grid-cols-5 gap-2 text-[9px] sm:text-xs text-slate-500 uppercase tracking-wider mb-2 px-2">
        <span>Load #</span><span>BOL Signed</span><span>POD Submitted</span><span>Rate Confirm</span><span>Invoice</span>
      </div>

      <div className="flex-1 space-y-1.5 overflow-hidden">
        {paperworkItems.map((item, i) => (
          <div
            key={item.load}
            className="grid grid-cols-5 gap-2 text-xs px-2 py-2.5 rounded-lg bg-[#162340]/60 border border-slate-700/30"
            style={{ animation: active ? `slideInRow 0.4s ease-out ${i * 120}ms both` : "none", opacity: active ? undefined : 0 }}
          >
            <span className="text-blue-400 font-mono text-[10px] sm:text-xs">{item.load}</span>
            <span className={item.bol ? "text-green-400" : "text-red-400"}>{item.bol ? "✓ Signed" : "✗ Missing"}</span>
            <span className={item.pod ? "text-green-400" : "text-red-400"}>{item.pod ? "✓ Submitted" : "✗ Missing"}</span>
            <span className={item.rateConfirm ? "text-green-400" : "text-red-400"}>{item.rateConfirm ? "✓ Confirmed" : "✗ Missing"}</span>
            <span className={item.invoice ? "text-green-400" : "text-slate-600"}>{item.invoice ? "✓ Sent" : "— Pending"}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
        <p className="text-xs text-red-400">
          <span className="font-bold">⚠ 2 loads blocked:</span> LD-7203 missing BOL &amp; POD, LD-7205 missing Rate Confirmation. RTS Financial cannot process these invoices until resolved.
        </p>
      </div>
    </div>
  );
}

/* ── Screen 3: Driver Breakdown ───────────────────────── */
function DriverBreakdownScreen({ active }: { active: boolean }) {
  const breakdown = [
    { label: "Gross Rate (CHI → DAL)", value: "$4,200.00", type: "gross" },
    { label: "Fuel Advance", value: "-$380.00", type: "deduction" },
    { label: "Toll Charges", value: "-$45.00", type: "deduction" },
    { label: "RTS Factoring Fee (3%)", value: "-$126.00", type: "deduction" },
    { label: "Repair Deduction", value: "$0.00", type: "deduction" },
  ];
  const netPay = "$3,649.00";

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm sm:text-base">Driver Settlement — A. Karimov</h3>
        <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">Auto-sent to driver</span>
      </div>

      <div className="bg-[#162340] rounded-lg border border-slate-700/50 p-4 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center text-blue-400 font-bold text-sm">AK</div>
          <div>
            <p className="text-white text-sm font-medium">Akmal Karimov</p>
            <p className="text-slate-500 text-xs">Load LD-7201 · CH Robinson · March 12, 2025</p>
          </div>
        </div>

        <div className="space-y-2">
          {breakdown.map((item, i) => (
            <div
              key={item.label}
              className="flex justify-between items-center text-xs sm:text-sm py-1.5 border-b border-slate-700/30 last:border-0"
              style={{ animation: active ? `slideInRow 0.4s ease-out ${i * 100}ms both` : "none", opacity: active ? undefined : 0 }}
            >
              <span className="text-slate-400">{item.label}</span>
              <span className={item.type === "gross" ? "text-white font-medium" : "text-red-400"}>{item.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t-2 border-blue-500/30 flex justify-between items-center">
          <span className="text-white font-semibold text-sm">Net Pay</span>
          <span className="text-green-400 font-bold text-xl">{netPay}</span>
        </div>
      </div>

      <p className="text-xs text-slate-500 text-center">
        ✓ Drivers receive this breakdown automatically — no more weekend phone calls about deductions
      </p>
    </div>
  );
}

/* ── Main Component ───────────────────────────────────── */
export default function ProductDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setCurrentScreen(0);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % SCREENS);
    }, SCREEN_DURATION);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-[#0a1628] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          See FreightDesk in Action
        </h2>
        <p className="text-slate-400 text-center mb-12 leading-relaxed max-w-2xl mx-auto">
          Watch how loads go from entry to driver settlement — without a single
          spreadsheet.
        </p>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl" />

          <div className="relative rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl">
            <div className="bg-[#0f1d33] px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-slate-500 bg-[#162340] px-4 py-1 rounded-md">
                  app.freightdesk.ai/dashboard
                </span>
              </div>
            </div>

            <div className="bg-[#0f1d33] flex">
              <div className="hidden sm:flex flex-col w-40 bg-[#0a1628] border-r border-slate-700/30 py-4 px-3 gap-1">
                <p className="text-[10px] text-slate-600 uppercase tracking-wider mb-2 px-2">Menu</p>
                {navItems.map((item, i) => (
                  <div
                    key={item}
                    className={`text-xs px-2 py-1.5 rounded transition-colors duration-300 ${
                      activeNav[currentScreen] === i ? "bg-blue-600/20 text-blue-400" : "text-slate-500"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex-1 h-[400px] sm:h-[460px] relative overflow-hidden">
                <div className={screenClasses(currentScreen, 0)}>
                  <LoadEntryScreen active={currentScreen === 0} />
                </div>
                <div className={screenClasses(currentScreen, 1)}>
                  <SettlementScreen active={currentScreen === 1} />
                </div>
                <div className={screenClasses(currentScreen, 2)}>
                  <PaperworkScreen active={currentScreen === 2} />
                </div>
                <div className={screenClasses(currentScreen, 3)}>
                  <DriverBreakdownScreen active={currentScreen === 3} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {screenTitles.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentScreen(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentScreen === i ? "bg-blue-500 w-8" : "bg-slate-600 hover:bg-slate-500 w-2.5"
              }`}
            />
          ))}
        </div>
        <p className="text-slate-400 text-sm text-center mt-3 transition-all duration-300">
          {screenTitles[currentScreen]}
        </p>
      </div>
    </section>
  );
}
