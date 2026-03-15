"use client";

import { useState, useEffect, useRef } from "react";

const SCREENS = 4;
const SCREEN_DURATION = 5000;

const screenTitles = [
  "Live Load Feed",
  "AI Matching & Flagging",
  "One-Click Approval",
  "Reports & Settlements",
];

const navItems = ["Dashboard", "Loads", "Settlements", "Reports"];
const activeNav = [1, 2, 2, 3]; // which nav item is active per screen

const loads = [
  { id: "LD-4821", route: "CHI → DAL", amount: "$3,450", status: "New" },
  { id: "LD-4822", route: "ATL → MIA", amount: "$2,180", status: "New" },
  { id: "LD-4823", route: "LAX → SEA", amount: "$4,720", status: "New" },
  { id: "LD-4824", route: "HOU → PHX", amount: "$1,950", status: "New" },
  { id: "LD-4825", route: "NYC → BOS", amount: "$2,860", status: "New" },
];

const matchItems = [
  { load: "LD-4821", driver: "A. Karimov", amount: "$3,450", flag: null },
  { load: "LD-4822", driver: "D. Yusupov", amount: "$2,180", flag: null },
  { load: "LD-4823", driver: "R. Alimov", amount: "$4,720", flag: "Missing POD" },
  { load: "LD-4824", driver: "S. Rustamov", amount: "$1,950", flag: null },
  { load: "LD-4825", driver: "M. Tursunov", amount: "$2,860", flag: "Rate mismatch" },
];

const reports = [
  { title: "Driver Settlement Report", date: "Mar 14, 2026", type: "PDF" },
  { title: "Broker Payment Summary", date: "Mar 14, 2026", type: "XLSX" },
  { title: "Weekly P&L Statement", date: "Mar 10, 2026", type: "PDF" },
];

const barData = [65, 80, 55, 90, 75, 95, 70];
const barLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function screenClasses(current: number, index: number) {
  const isActive = current === index;
  return `absolute inset-0 p-4 sm:p-6 transition-all duration-700 ease-in-out ${
    isActive
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-4 pointer-events-none"
  }`;
}

/* ── Screen 0: Live Load Feed ─────────────────────────── */
function LoadFeedScreen({ active }: { active: boolean }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm sm:text-base">
          Incoming Loads
        </h3>
        <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
          ● Live
        </span>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-4 gap-2 text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mb-2 px-2">
        <span>Load #</span>
        <span>Route</span>
        <span>Amount</span>
        <span>Status</span>
      </div>

      {/* Rows */}
      <div className="flex-1 space-y-1.5 overflow-hidden">
        {loads.map((load, i) => (
          <div
            key={load.id}
            className="grid grid-cols-4 gap-2 text-xs sm:text-sm px-2 py-2 rounded-lg bg-[#162340]/60 border border-slate-700/30"
            style={{
              animation: active
                ? `slideInRow 0.5s ease-out ${i * 150}ms both`
                : "none",
              opacity: active ? undefined : 0,
            }}
          >
            <span className="text-blue-400 font-mono">{load.id}</span>
            <span className="text-slate-300">{load.route}</span>
            <span className="text-white font-medium">{load.amount}</span>
            <span>
              <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">
                {load.status}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Screen 1: AI Matching ────────────────────────────── */
function MatchingScreen({ active }: { active: boolean }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("");

  useEffect(() => {
    if (!active) {
      setProgress(0);
      setStatusText("");
      return;
    }
    const timer = setTimeout(() => setProgress(100), 100);

    const fullText = "Matching load LD-4821 to settlement...";
    let idx = 0;
    const typeTimer = setInterval(() => {
      idx++;
      setStatusText(fullText.slice(0, idx));
      if (idx >= fullText.length) clearInterval(typeTimer);
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(typeTimer);
    };
  }, [active]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm sm:text-base">
          AI Settlement Matching
        </h3>
        <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">
          Processing
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-slate-700 rounded-full mb-1 overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all ease-linear"
          style={{
            width: `${progress}%`,
            transitionDuration: "4000ms",
          }}
        />
      </div>
      <p className="text-[10px] sm:text-xs text-slate-500 font-mono mb-4 h-4">
        {statusText}
        <span className="animate-pulse">|</span>
      </p>

      {/* Match rows */}
      <div className="flex-1 space-y-1.5 overflow-hidden">
        {matchItems.map((item, i) => (
          <div
            key={item.load}
            className="flex items-center gap-2 text-xs sm:text-sm px-2 py-2 rounded-lg bg-[#162340]/60 border border-slate-700/30"
            style={{
              animation: active
                ? `slideInRow 0.4s ease-out ${i * 200 + 400}ms both`
                : "none",
              opacity: active ? undefined : 0,
            }}
          >
            <span className="text-blue-400 font-mono w-16 shrink-0">
              {item.load}
            </span>
            <svg className="w-4 h-4 text-slate-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="text-slate-300 flex-1 truncate">{item.driver}</span>
            <span className="text-white font-medium w-16 text-right shrink-0">
              {item.amount}
            </span>
            {item.flag ? (
              <span className="text-[9px] sm:text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded-full animate-pulse whitespace-nowrap">
                {item.flag}
              </span>
            ) : (
              <span className="text-[10px] text-green-400">✓</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Screen 2: Review & Approve ───────────────────────── */
function ApproveScreen({ active }: { active: boolean }) {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-white font-semibold text-sm sm:text-base mb-4">
        Settlement Review
      </h3>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Total Loads", value: "47", color: "text-blue-400" },
          { label: "Matched", value: "45", color: "text-green-400" },
          { label: "Flagged", value: "2", color: "text-amber-400" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[#162340] border border-slate-700/50 rounded-lg p-3 text-center"
          >
            <p className={`text-xl sm:text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </p>
            <p className="text-[10px] sm:text-xs text-slate-500 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Settlement items */}
      <div className="flex-1 space-y-1.5 overflow-hidden">
        {["A. Karimov — $3,450", "D. Yusupov — $2,180", "R. Alimov — $4,720", "S. Rustamov — $1,950"].map(
          (item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-xs sm:text-sm px-3 py-2 rounded-lg bg-[#162340]/60 border border-slate-700/30"
              style={{
                animation: active
                  ? `slideInRow 0.4s ease-out ${i * 120}ms both`
                  : "none",
                opacity: active ? undefined : 0,
              }}
            >
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-300 flex-1">{item}</span>
              <span className="text-[10px] text-green-400">Verified</span>
            </div>
          )
        )}
      </div>

      {/* Approve button */}
      <button
        className="mt-4 w-full py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm sm:text-base cursor-default"
        style={{
          animation: active ? "subtlePulse 2s ease-in-out infinite" : "none",
        }}
      >
        ✓ Approve All Settlements
      </button>
    </div>
  );
}

/* ── Screen 3: Reports ────────────────────────────────── */
function ReportsScreen({ active }: { active: boolean }) {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-white font-semibold text-sm sm:text-base mb-4">
        Generated Reports
      </h3>

      {/* Report cards */}
      <div className="space-y-2 mb-5">
        {reports.map((report, i) => (
          <div
            key={report.title}
            className="flex items-center gap-3 px-3 py-3 rounded-lg bg-[#162340]/60 border border-slate-700/30"
            style={{
              animation: active
                ? `slideInRow 0.5s ease-out ${i * 200}ms both`
                : "none",
              opacity: active ? undefined : 0,
            }}
          >
            <div className="w-8 h-8 rounded bg-blue-600/20 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs sm:text-sm font-medium truncate">
                {report.title}
              </p>
              <p className="text-[10px] text-slate-500">{report.date}</p>
            </div>
            <span className="text-[10px] bg-slate-700/50 text-slate-400 px-2 py-0.5 rounded">
              {report.type}
            </span>
          </div>
        ))}
      </div>

      {/* Revenue chart */}
      <div className="flex-1 bg-[#162340]/40 rounded-lg border border-slate-700/30 p-3">
        <p className="text-[10px] sm:text-xs text-slate-500 mb-2">
          Weekly Revenue
        </p>
        <div className="flex items-end justify-between gap-1 sm:gap-2 h-24 sm:h-28">
          {barData.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-blue-500/70"
                style={{
                  ["--bar-height" as string]: `${h}%`,
                  height: active ? `${h}%` : "0%",
                  transition: active
                    ? `height 1s ease-out ${i * 100 + 500}ms`
                    : "none",
                }}
              />
              <span className="text-[8px] sm:text-[10px] text-slate-600">
                {barLabels[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ───────────────────────────────────── */
export default function ProductDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(0);

  // Intersection Observer
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

  // Auto-advance
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
          Watch how AI transforms raw load data into approved settlements —
          automatically.
        </p>

        {/* Browser chrome frame */}
        <div className="relative mx-auto max-w-4xl">
          {/* Glow */}
          <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl" />

          {/* Browser window */}
          <div className="relative rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl">
            {/* Title bar */}
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

            {/* Content area */}
            <div className="bg-[#0f1d33] flex">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col w-40 bg-[#0a1628] border-r border-slate-700/30 py-4 px-3 gap-1">
                <p className="text-[10px] text-slate-600 uppercase tracking-wider mb-2 px-2">
                  Menu
                </p>
                {navItems.map((item, i) => (
                  <div
                    key={item}
                    className={`text-xs px-2 py-1.5 rounded transition-colors duration-300 ${
                      activeNav[currentScreen] === i
                        ? "bg-blue-600/20 text-blue-400"
                        : "text-slate-500"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Screens */}
              <div className="flex-1 h-[380px] sm:h-[440px] relative overflow-hidden">
                <div className={screenClasses(currentScreen, 0)}>
                  <LoadFeedScreen active={currentScreen === 0} />
                </div>
                <div className={screenClasses(currentScreen, 1)}>
                  <MatchingScreen active={currentScreen === 1} />
                </div>
                <div className={screenClasses(currentScreen, 2)}>
                  <ApproveScreen active={currentScreen === 2} />
                </div>
                <div className={screenClasses(currentScreen, 3)}>
                  <ReportsScreen active={currentScreen === 3} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {screenTitles.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentScreen(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentScreen === i
                  ? "bg-blue-500 w-8"
                  : "bg-slate-600 hover:bg-slate-500 w-2.5"
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
