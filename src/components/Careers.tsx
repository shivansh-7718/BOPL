"use client";

import { useState } from "react";
import { FileEdit, MapPin, Briefcase, UploadCloud, Send } from "lucide-react";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    { title: "Medical Representative (MR)", openings: "2 Positions", location: "Kanpur/Lucknow", exp: "1-3 Years Experience", desc: "Expanding our medical awareness footprint across Uttar Pradesh and Bihar regions." },
    { title: "QC Analyst (HPLC/UV)", openings: "1 Position", location: "Kanpur Facility", exp: "2-5 Years Experience", desc: "Conducting quantitative assays on formulation batches using advanced chromatography." },
    { title: "QA Compliance Officer", openings: "1 Position", location: "Kanpur Headquarters", exp: "3+ Years Experience", desc: "Auditing batch records, verifying SOP guidelines, and coordinating ISO accreditation reviews." }
  ];

  const handleApply = (role: string) => {
    setSelectedJob(role);
    document.getElementById("careers")?.scrollIntoView();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob("");
      setResumeName("");
    }, 2000);
  };

  return (
    <section id="careers" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-bold tracking-widest text-brandorange-500 uppercase px-3 py-1 bg-brandorange-50 dark:bg-slate-800 dark:text-brandorange-400 rounded-full">Careers</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Shape the Future of Healthcare</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-brandorange-500 to-tealaccent-500 mx-auto rounded-full" />
        <p className="text-sm text-slate-500 dark:text-slate-400">Join our dynamic corporate environment where scientific dedication and patient outcomes come first.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Jobs List */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 pl-2">Current Openings</h3>
          {jobs.map((job, i) => (
            <div 
              key={i} 
              onClick={() => handleApply(job.title)}
              className="glass-card p-5 rounded-2xl border-slate-200/55 hover:border-brandorange-500/50 transition-colors cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-extrabold text-sm text-slate-800 dark:text-white group-hover:text-brandorange-500 transition-colors">{job.title}</h4>
                <span className="text-[9px] font-bold text-tealaccent-500 bg-tealaccent-50 dark:bg-slate-800 px-2 py-0.5 rounded-full">{job.openings}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">{job.desc}</p>
              <div className="flex items-center space-x-4 text-[10px] text-slate-400 font-semibold">
                <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{job.location}</span>
                <span className="flex items-center"><Briefcase className="w-3.5 h-3.5 mr-1" />{job.exp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Apply form */}
        <div className="lg:col-span-6">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-md">
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
              <FileEdit className="text-brandorange-500 w-5 h-5" />
              <span>Instant Application Portal</span>
            </h3>
            <p className="text-xs text-slate-500 mb-6">Complete our online career application and upload your professional profile.</p>
            
            {submitted ? (
              <div className="py-8 text-center text-softgreen-500 font-bold text-sm">
                Application successfully submitted! Check your email for further steps.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Your Name *</label>
                    <input type="text" required className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address *</label>
                    <input type="email" required className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone *</label>
                    <input type="tel" required className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Applied Position *</label>
                    <select 
                      value={selectedJob}
                      onChange={(e) => setSelectedJob(e.target.value)}
                      required 
                      className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none text-slate-600"
                    >
                      <option value="">Select a Role...</option>
                      <option value="Medical Representative (MR)">Medical Representative (MR)</option>
                      <option value="QC Analyst (HPLC/UV)">QC Analyst (HPLC/UV)</option>
                      <option value="QA Compliance Officer">QA Compliance Officer</option>
                      <option value="General Internship">General / Other Positions</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Brief Cover Note</label>
                  <textarea placeholder="Tell us about your background..." className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none focus:border-brandorange-500 h-16" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Upload Professional Resume (PDF) *</label>
                  <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-all flex flex-col items-center justify-center relative">
                    <input 
                      type="file" 
                      required 
                      accept=".pdf" 
                      onChange={(e) => setResumeName(e.target.files?.[0]?.name || "")}
                      className="absolute inset-0 opacity-0 cursor-pointer" 
                    />
                    <UploadCloud className="w-8 h-8 text-slate-400 mb-2" />
                    <span className={`text-[11px] font-semibold ${resumeName ? 'text-softgreen-500' : 'text-slate-500'}`}>
                      {resumeName ? `Selected: ${resumeName}` : 'Drag & drop or browse computer files'}
                    </span>
                  </div>
                </div>

                <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-brandorange-500 to-brandorange-600 text-white font-bold rounded-xl text-xs shadow-md shadow-brandorange-500/20 active:scale-98 transition-all flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Submit Profile Application</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

