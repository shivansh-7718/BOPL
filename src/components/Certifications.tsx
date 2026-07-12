"use client";

import { ShieldAlert, ClipboardCheck, Landmark, FileCheck2 } from "lucide-react";

export default function Certifications() {
  const certifications = [
    { icon: ShieldAlert, title: "Drug License", subtitle: "Formulation Approvals", color: "text-brandorange-500", bg: "bg-brandorange-50" },
    { icon: ClipboardCheck, title: "Food License", subtitle: "FSSAI Standards", color: "text-tealaccent-500", bg: "bg-tealaccent-50" },
    { icon: Landmark, title: "MCA Registered", subtitle: "Govt of India (2002)", color: "text-softgreen-500", bg: "bg-softgreen-50" },
    { icon: FileCheck2, title: "GST", subtitle: "Tax Compliant", color: "text-yellow-500", bg: "bg-yellow-50" }
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-slate-950 transition-colors border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 text-center mb-8">Registered Credentials & Corporate Accreditations</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <div key={i} className="glass-card p-5 rounded-2xl text-center border-slate-200/50 dark:border-slate-800 hover:shadow-md transition-all group relative cursor-pointer">
              <div className={`w-12 h-12 rounded-xl ${cert.bg} mx-auto flex items-center justify-center mb-3`}>
                <cert.icon className={`w-5.5 h-5.5 ${cert.color}`} />
              </div>
              <span className="font-bold text-xs text-slate-800 dark:text-white block">{cert.title}</span>
              <span className="text-[9px] text-slate-400 block mt-1">{cert.subtitle}</span>
              <span className="absolute top-3 right-3 text-softgreen-500 text-[9px] font-bold bg-softgreen-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Active</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

