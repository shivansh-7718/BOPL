"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, Eye, FlaskConical, CheckCheck, Heart, Users } from "lucide-react";

export default function About() {
  const values = [
    { icon: FlaskConical, label: "Innovation", desc: "Research Driven", color: "text-brandorange-500", bg: "bg-brandorange-50" },
    { icon: CheckCheck, label: "Quality First", desc: "GMP Adherence", color: "text-tealaccent-500", bg: "bg-tealaccent-50" },
    { icon: Heart, label: "Patient Centered", desc: "Health First", color: "text-softgreen-500", bg: "bg-softgreen-50" },
    { icon: Users, label: "Integrity", desc: "Honest Conduct", color: "text-yellow-500", bg: "bg-yellow-50" }
  ];

  const milestones = [
    { date: "Nov 21, 2002", title: "Corporate Foundation", desc: "Incorporated as a private limited entity in Kanpur, launching stable general health multi-vitamins." },
    { date: "2010", title: "Lucrative Expansion", desc: "Launched Lucknow branch in Vikas Nagar. Registered as a supplier for institutional state medical centers." },
    { date: "2020", title: "Critical Care breathing focus", desc: "Strategic expansion into high-end medical equipment: oxygen concentrators, CPAP/BiPAP, and nebulizers." },
    { date: "Present (2026)", title: "Redefined Enterprise Identity", desc: "Expanding medicine catalog to over 35 items. Deploying advanced digital support portals for partners." }
  ];

  return (
    <section id="about" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brandorange-500/5 rounded-full blur-3xl" />
      
      <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
        
        {/* Left Column: Story & Vision */}
        <div className="lg:col-span-7 space-y-8">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-md">
            <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
              <BookOpen className="text-brandorange-500 w-5 h-5" />
              <span>Our Journey & Purpose</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              For more than 24 years, Biocyte Organics has dedicated itself to manufacturing, supplies, and marketing of pharmaceutical tablets, capsules, liquids, and critical care diagnostics equipment. We have established deep trust with state institutions, government healthcare agencies, and local distributors.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/40 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/30 dark:border-slate-700/30">
                <Target className="w-6 h-6 text-brandorange-500 mb-3" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Our Mission</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">To offer high-efficiency, verified, and cost-effective medical formulations that protect life, health, and elevate community happiness.</p>
              </div>
              <div className="bg-white/40 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/30 dark:border-slate-700/30">
                <Eye className="w-6 h-6 text-tealaccent-500 mb-3" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Our Vision</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">To be a global biotech-tech innovator in specialized patient care, critical respiratory solutions, and diagnostics.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 class="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2 pl-2">Our Core Values</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {values.map((v, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl text-center hover:scale-105 active:scale-95 transition-all group cursor-pointer hover:border-brandorange-500/50">
                  <div className={`w-10 h-10 rounded-full ${v.bg} flex items-center justify-center mx-auto mb-2`}>
                    <v.icon className={`w-4.5 h-4.5 ${v.color}`} />
                  </div>
                  <span className="font-bold text-xs text-slate-800 dark:text-white block">{v.label}</span>
                  <span className="text-[9px] text-slate-400 block mt-1">{v.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Milestones */}
        <div className="lg:col-span-5 space-y-6">
          <h4 class="font-bold text-xs uppercase tracking-wider text-slate-400 pl-4 border-l-2 border-brandorange-500">Corporate Journey Timeline</h4>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="relative pl-8 border-l border-slate-200 dark:border-slate-800 pb-4 group last:pb-0">
                <div className={`absolute -left-1.5 top-1 w-3.5 h-3.5 rounded-full ${i === milestones.length - 1 ? 'bg-brandorange-500 ring-4 ring-brandorange-500/20' : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-brandorange-500'} transition-all`} />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.date}</span>
                <h5 className="font-extrabold text-sm text-slate-800 dark:text-white">{m.title}</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

