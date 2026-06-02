"use client";

import { useState, useEffect } from "react";
import { Inbox, TestTube, Combine, Package, DoorClosed, Workflow, PackageOpen, Terminal } from "lucide-react";

export default function Manufacturing() {
  const [activeZone, setActiveZone] = useState<"airlock" | "mixing" | "packaging">("airlock");
  const [tickerTime, setTickerTime] = useState("");

  useEffect(() => {
    setTickerTime(new Date().toTimeString().split(" ")[0]);
  }, [activeZone]);

  const cleanroomMetrics = {
    airlock: {
      pressure: "+15.2 Pa",
      humidity: "45% RH",
      changes: "40 / Hour",
      hepa: "99.997%",
      ticker: "Assay Status: Airlocks secure. +15.2 Pa positive pressure cycle active.",
      detail: "<b>Air Lock Zone:</b> Class 100 HEPA air shower systems seal active formulation barriers. Maintains differential positive pressure (+15 Pa) to completely prevent raw material contamination."
    },
    mixing: {
      pressure: "+12.5 Pa",
      humidity: "40% RH",
      changes: "55 / Hour",
      hepa: "99.999%",
      ticker: "Assay Status: Formulation mixers active. Air changes at 55/Hour nominal.",
      detail: "<b>Sterile Mixing & Formulation Zone:</b> Clean room Grade A area where active liquid/capsule blends are synthesized. Constant atmospheric sanitization and 55 hourly filtered air recirculations keep the area absolutely sterile."
    },
    packaging: {
      pressure: "+10.1 Pa",
      humidity: "38% RH",
      changes: "30 / Hour",
      hepa: "99.995%",
      ticker: "Assay Status: Blister belt active. Relative humidity at 38% RH (Dry-Zone).",
      detail: "<b>Strip & Blister Packaging Belt:</b> Moisture-proof sealed blister assembly lines. Relative humidity is kept below 40% to preserve medicinal compound stability and ensure maximum shelf life."
    }
  };

  const workflow = [
    { icon: Inbox, label: "Input API" },
    { icon: TestTube, label: "QC Test" },
    { icon: Combine, label: "Blend" },
    { icon: Package, label: "Package" }
  ];

  return (
    <section id="manufacturing" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">State-of-the-Art GMP Formulation Facility</h3>
            <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
              Biocyte Organics relies on advanced GMP formulation standards. Operating with massive climate-controlled cleanrooms, high-capacity automated tableting and capsule-filling lines, and certified liquid syrup packaging systems.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex space-x-3 items-start">
              <div className="w-8 h-8 rounded-full bg-brandorange-100 dark:bg-slate-800 text-brandorange-500 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
              <div>
                <h4 className="font-bold text-xs text-slate-800 dark:text-white">Raw Material Validation</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Every batch of active API undergoes robust chemical assay checks inside our Quality Control laboratory.</p>
              </div>
            </div>
            <div className="flex space-x-3 items-start">
              <div className="w-8 h-8 rounded-full bg-tealaccent-100 dark:bg-slate-800 text-tealaccent-500 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
              <div>
                <h4 className="font-bold text-xs text-slate-800 dark:text-white">Sterile Mixing & Formulation</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Automated containment mixers process core therapeutic formulations to ensure absolute batch uniformity.</p>
              </div>
            </div>
          </div>

          {/* Workflow Checklist Card */}
          <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="block text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-3">Workflow Checklist</span>
            <div className="flex items-center justify-between text-center relative px-2">
              <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />
              {workflow.map((item, i) => (
                <div key={i} className="relative z-10 group cursor-pointer hover:scale-110 transition-transform duration-300">
                  <div className="w-7 h-7 rounded-full bg-brandorange-500 text-white flex items-center justify-center mx-auto text-[10px] font-bold shadow-sm">
                    <item.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="block text-[8px] font-bold text-slate-500 mt-1 uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: HIGH-FIDELITY INTERACTIVE CLEANROOM CONTROL PANEL */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg glow-orange flex-grow flex flex-col justify-between space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-softgreen-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-softgreen-500"></span>
                </span>
                <span className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">Facility Live Diagnostic Screen</span>
              </div>
              <div className="text-[10px] font-bold text-brandorange-500 bg-brandorange-50 dark:bg-slate-800 px-2.5 py-1 rounded-full uppercase tracking-wider">GMP Class A</div>
            </div>

            {/* Simulated Schematic Floor plan */}
            <div className="relative bg-slate-950 rounded-2xl p-4 border border-slate-800 flex flex-col justify-between h-48 overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="w-full h-full bg-[linear-gradient(rgba(0,184,169,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,184,169,0.1)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 relative z-10 my-auto h-24">
                {/* Room 1 */}
                <div className={`border rounded-xl p-2.5 flex flex-col justify-between transition-all duration-300 ${
                  activeZone === "airlock" 
                    ? "border-2 border-brandorange-500 bg-brandorange-500/10 scale-102 shadow-md shadow-brandorange-500/10" 
                    : "border-slate-800 bg-slate-900/40"
                }`}>
                  <span className={`text-[8px] font-extrabold uppercase tracking-widest block ${activeZone === "airlock" ? "text-brandorange-400" : "text-slate-500"}`}>Zone 1</span>
                  <span className={`text-[9px] font-bold block mt-1 ${activeZone === "airlock" ? "text-white" : "text-slate-400"}`}>Air Lock Chamber</span>
                  <div className="flex items-center space-x-1 mt-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${activeZone === "airlock" ? "bg-softgreen-500 animate-ping" : "bg-slate-600"}`}></span>
                    <span className={`text-[7px] uppercase tracking-wider font-extrabold ${activeZone === "airlock" ? "text-softgreen-400" : "text-slate-500"}`}>
                      {activeZone === "airlock" ? "Active" : "Standby"}
                    </span>
                  </div>
                </div>

                {/* Room 2 */}
                <div className={`border rounded-xl p-2.5 flex flex-col justify-between transition-all duration-300 ${
                  activeZone === "mixing" 
                    ? "border-2 border-brandorange-500 bg-brandorange-500/10 scale-102 shadow-md shadow-brandorange-500/10" 
                    : "border-slate-800 bg-slate-900/40"
                }`}>
                  <span className={`text-[8px] font-extrabold uppercase tracking-widest block ${activeZone === "mixing" ? "text-brandorange-400" : "text-slate-500"}`}>Zone 2</span>
                  <span className={`text-[9px] font-bold block mt-1 ${activeZone === "mixing" ? "text-white" : "text-slate-400"}`}>Sterile Area</span>
                  <div className="flex items-center space-x-1 mt-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${activeZone === "mixing" ? "bg-softgreen-500 animate-ping" : "bg-slate-600"}`}></span>
                    <span className={`text-[7px] uppercase tracking-wider font-extrabold ${activeZone === "mixing" ? "text-softgreen-400" : "text-slate-500"}`}>
                      {activeZone === "mixing" ? "Active" : "Standby"}
                    </span>
                  </div>
                </div>

                {/* Room 3 */}
                <div className={`border rounded-xl p-2.5 flex flex-col justify-between transition-all duration-300 ${
                  activeZone === "packaging" 
                    ? "border-2 border-brandorange-500 bg-brandorange-500/10 scale-102 shadow-md shadow-brandorange-500/10" 
                    : "border-slate-800 bg-slate-900/40"
                }`}>
                  <span className={`text-[8px] font-extrabold uppercase tracking-widest block ${activeZone === "packaging" ? "text-brandorange-400" : "text-slate-500"}`}>Zone 3</span>
                  <span className={`text-[9px] font-bold block mt-1 ${activeZone === "packaging" ? "text-white" : "text-slate-400"}`}>Packing Belt</span>
                  <div className="flex items-center space-x-1 mt-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${activeZone === "packaging" ? "bg-softgreen-500 animate-ping" : "bg-slate-600"}`}></span>
                    <span className={`text-[7px] uppercase tracking-wider font-extrabold ${activeZone === "packaging" ? "text-softgreen-400" : "text-slate-500"}`}>
                      {activeZone === "packaging" ? "Active" : "Standby"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ticker */}
              <div className="flex items-center justify-between border-t border-slate-800/80 pt-2 text-[9px] font-mono text-slate-500 relative z-10">
                <div className="flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-tealaccent-500" />
                  <span className="text-tealaccent-400">{cleanroomMetrics[activeZone].ticker}</span>
                </div>
                <span className="text-slate-400">{tickerTime}</span>
              </div>
            </div>

            {/* Clickable Zone Grids */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div 
                onClick={() => setActiveZone("airlock")}
                className={`p-3.5 rounded-2xl cursor-pointer hover:border-brandorange-500 hover:scale-102 active:scale-98 transition-all flex flex-col items-center justify-center space-y-1.5 ${
                  activeZone === "airlock" 
                    ? "border-2 border-brandorange-500 bg-brandorange-50/10" 
                    : "border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${activeZone === "airlock" ? "bg-brandorange-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}>
                  <DoorClosed className="w-4 h-4" />
                </div>
                <span className="block font-bold text-[10px]">1. Air Locks</span>
                <span className="block text-[8px] text-softgreen-500 font-bold uppercase tracking-wider">Secure</span>
              </div>

              <div 
                onClick={() => setActiveZone("mixing")}
                className={`p-3.5 rounded-2xl cursor-pointer hover:border-brandorange-500 hover:scale-102 active:scale-98 transition-all flex flex-col items-center justify-center space-y-1.5 ${
                  activeZone === "mixing" 
                    ? "border-2 border-brandorange-500 bg-brandorange-50/10" 
                    : "border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${activeZone === "mixing" ? "bg-brandorange-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}>
                  <Workflow className="w-4 h-4" />
                </div>
                <span className="block font-bold text-[10px]">2. Sterile Area</span>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider">Nominal</span>
              </div>

              <div 
                onClick={() => setActiveZone("packaging")}
                className={`p-3.5 rounded-2xl cursor-pointer hover:border-brandorange-500 hover:scale-102 active:scale-98 transition-all flex flex-col items-center justify-center space-y-1.5 ${
                  activeZone === "packaging" 
                    ? "border-2 border-brandorange-500 bg-brandorange-50/10" 
                    : "border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${activeZone === "packaging" ? "bg-brandorange-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}>
                  <PackageOpen className="w-4 h-4" />
                </div>
                <span className="block font-bold text-[10px]">3. Packing Belt</span>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider">Nominal</span>
              </div>
            </div>

            {/* Metrics Panel */}
            <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold">
              <div className="space-y-1 text-center sm:text-left">
                <span className="block text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Air Pressure</span>
                <span className="block text-base font-extrabold text-slate-800 dark:text-white">{cleanroomMetrics[activeZone].pressure}</span>
              </div>
              <div className="space-y-1 text-center sm:text-left border-l border-slate-200 dark:border-slate-800 pl-0 sm:pl-4">
                <span className="block text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Humidity</span>
                <span className="block text-base font-extrabold text-slate-800 dark:text-white">{cleanroomMetrics[activeZone].humidity}</span>
              </div>
              <div className="space-y-1 text-center sm:text-left border-l border-slate-200 dark:border-slate-800 pl-0 sm:pl-4">
                <span className="block text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Air Changes</span>
                <span className="block text-base font-extrabold text-slate-800 dark:text-white">{cleanroomMetrics[activeZone].changes}</span>
              </div>
              <div className="space-y-1 text-center sm:text-left border-l border-slate-200 dark:border-slate-800 pl-0 sm:pl-4">
                <span className="block text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">HEPA Filter</span>
                <span className="block text-base font-extrabold text-softgreen-500">{cleanroomMetrics[activeZone].hepa}</span>
              </div>
            </div>

            {/* Note details */}
            <div 
              className="p-4 bg-brandorange-50/30 dark:bg-brandorange-500/5 rounded-2xl border border-brandorange-500/10 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: cleanroomMetrics[activeZone].detail }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
