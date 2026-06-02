"use client";

import { User, GraduationCap, Briefcase, Building, Handshake, MapPin } from "lucide-react";

export default function Leaders() {
  const leaders = [
    {
      name: "J. R. S. Gaur",
      role: "Director of Formulation Assay",
      qualifications: "Bachelor of Science",
      experience: "25 Years",
      companies: "Ranbaxy Laboratories Limited, Glenmark Laboratories Limited, Glenmark Pharmaceuticals Limited"
    },
    {
      name: "Vibhor Tiwari",
      role: "Director of Global Channels",
      qualifications: "Bachelor of Science, Masters in Business Administration",
      experience: "12 Years",
      companies: "Biological E. Limited, Maxx Limited"
    },
    {
      name: "Indra Sen Singh",
      role: "Director of Quality Assurances",
      qualifications: "Bachelor of Science, Diploma in Marketing sponsored by SIDBI",
      experience: "15 Years",
      companies: "Dr. Reddy's Laboratories Limited, Maxx Limited"
    }
  ];

  const partners = [
    { name: "Creative Medical System Germany", location: "Strategic Partner" },
    { name: "Pneumacare Health Private Limited", location: "Strategic Partner" }
  ];

  return (
    <div className="space-y-16 mt-8">
      
      {/* Leadership Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Corporate Leadership</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Meet our experienced leadership team driving innovation and excellence in pharmaceutical solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {leaders.map((leader, i) => (
            <div key={i} className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div className="space-y-6">
                
                {/* Header Profile */}
                <div className="flex flex-col items-center text-center space-y-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-14 h-14 rounded-full bg-brandorange-50 dark:bg-slate-800 text-brandorange-500 flex items-center justify-center shadow-inner">
                    <User className="w-7 h-7" />
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

                  <div className="flex items-start space-x-3">
                    <Building className="w-4.5 h-4.5 text-softgreen-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Previous Companies</span>
                      <span className="block text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{leader.companies}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Partners Section */}
      <div className="space-y-8 border-t border-slate-200 dark:border-slate-800 pt-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brandorange-50 dark:bg-slate-800 text-[10px] font-bold text-brandorange-500 uppercase tracking-wider">
            <Handshake className="w-3.5 h-3.5" />
            <span>Strategic Partnerships</span>
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2">Business / Channel Partners</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            We collaborate with leading organizations to deliver comprehensive healthcare solutions across multiple markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-4 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-11 h-11 rounded-xl bg-brandorange-50 dark:bg-slate-800 text-brandorange-500 flex items-center justify-center shrink-0">
                <Building className="w-5.5 h-5.5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-800 dark:text-white">{partner.name}</h4>
                <span className="text-[10px] font-bold text-tealaccent-500 uppercase tracking-widest block mt-0.5">{partner.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Registered Address */}
        <div className="text-center pt-4 max-w-md mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-slate-50 dark:bg-slate-900 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 leading-relaxed">
            <MapPin className="w-4 h-4 text-brandorange-500 shrink-0" />
            <span>Address: F - 11, 2nd Floor, Fazal Ganj, Kanpur, New Delhi</span>
          </div>
        </div>
      </div>

    </div>
  );
}
