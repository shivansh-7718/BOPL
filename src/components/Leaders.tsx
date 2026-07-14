"use client";

import { User, GraduationCap, Briefcase } from "lucide-react";

export default function Leaders() {
  const leaders = [
    {
      name: "J. R. S. Gaur",
      role: "Director",
      image: "/jrs_gaur.jpg",
      qualifications: "Bachelor of Science",
      experience: "30 Years"
    },
    {
      name: "Vibhor Tiwari",
      role: "Director",
      image: "/vibhor_tiwari.jpg",
      qualifications: "Bachelor of Science, Masters in Business Administration",
      experience: "28 Years"
    },
    {
      name: "Indra Sen Singh",
      role: "Director",
      image: "/indra_sen_singh.jpg",
      qualifications: "Bachelor of Science, Diploma in Marketing sponsored by SIDBI",
      experience: "25 Years"
    }
  ];

  return (
    <div className="space-y-16 mt-8">
      
      {/* Leadership Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Corporate Leadership</h3>
          <p className="text-xs text-slate-505 leading-relaxed">
            Meet our experienced leadership team driving innovation and excellence in pharmaceutical solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {leaders.map((leader, i) => (
            <div key={i} className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div className="space-y-6">
                
                {/* Header Profile */}
                <div className="flex flex-col items-center text-center space-y-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-24 h-24 rounded-full bg-brandorange-50 dark:bg-slate-800 text-brandorange-500 flex items-center justify-center shadow-md overflow-hidden relative ring-4 ring-brandorange-500/10">
                    {leader.image ? (
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-10 h-10" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white">{leader.name}</h4>
                    <span className="text-[10px] font-bold text-brandorange-500 uppercase tracking-widest block mt-0.5">{leader.role}</span>
                  </div>
                </div>

                {/* Bio Grid */}
                <div className="space-y-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-4.5 h-4.5 text-brandorange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Academic Qualifications</span>
                      <span className="block text-slate-800 dark:text-slate-200 mt-0.5">{leader.qualifications}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-4.5 h-4.5 text-tealaccent-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total Experience</span>
                      <span className="block text-slate-800 dark:text-slate-200 mt-0.5">{leader.experience}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
