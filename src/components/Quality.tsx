"use client";

import { Beaker, Fingerprint, Timer } from "lucide-react";

export default function Quality() {
  const standards = [
    { icon: Beaker, title: "HPLC Validation Assays", desc: "High-Performance Liquid Chromatography tests ensure active chemical dosage precision across every production run." },
    { icon: Fingerprint, title: "Contamination Barrier", desc: "Atmospheric micro-particle counts are conducted daily in cleanrooms to secure absolute microbiological safety." },
    { icon: Timer, title: "Dissolution Assays", desc: "Testing bio-release speeds to ensure prompt bloodstream distribution and optimal therapeutic efficiency for patients." }
  ];

  return (
    <section id="quality" className="py-24 bg-gradient-to-tr from-slate-100/50 via-white to-brandorange-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-softgreen-500 uppercase px-3 py-1 bg-softgreen-50 dark:bg-slate-800 rounded-full">Quality Assurance</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Uncompromising Quality Testing Standards</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brandorange-500 to-tealaccent-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Our dedicated Quality Control (QC) laboratory monitors moisture tolerance, particle solubility, dissolution assays, and long-term shelf stability under rigid pharmacopoeial standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {standards.map((std, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brandorange-500 to-tealaccent-400 text-white flex items-center justify-center shadow-md mb-4">
                <std.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{std.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{std.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

