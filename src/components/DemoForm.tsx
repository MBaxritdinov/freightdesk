"use client";

import { useState, type FormEvent } from "react";

export default function DemoForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert(
      `Thanks, ${form.name}! We'll reach out to ${form.email} to schedule your demo.`
    );
  }

  return (
    <section id="demo" className="bg-[#0f1d33] py-24">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Get a Free Demo
        </h2>
        <p className="text-slate-400 text-center mb-12 leading-relaxed">
          See how FreightDesk can automate your logistics accounting. Fill out
          the form and we&apos;ll schedule a personalized walkthrough.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            required
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-[#162340] border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="text"
            required
            placeholder="Company Name"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-[#162340] border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="email"
            required
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-[#162340] border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-[#162340] border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Request a Demo
          </button>
        </form>
      </div>
    </section>
  );
}
