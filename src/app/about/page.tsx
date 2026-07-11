"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Quality from "@/components/Quality";
import Certifications from "@/components/Certifications";
import Leaders from "@/components/Leaders";
import { Handshake, Wrench, Truck } from "lucide-react";

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    const isDark = localStorage.getItem("dark-mode") === "enabled";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    const isDark = root.classList.contains("dark");
    setDarkMode(isDark);
    localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
  };

  const services = [
    { icon: Handshake, title: "Franchise & PCD Partners", desc: "Providing PCD Franchise business rights to dedicated sales representatives with high promotional material support." },
    { icon: Wrench, title: "Technical Care Desk", desc: "Specialized installation, repair, and remote calibration support for critical breathing equipment and nebulizers." },
    { icon: Truck, title: "Institutional Supplies", desc: "Executing rapid shipping pipelines for central and state healthcare boards, maintaining breathing device calibration." }
  ];

  return (
    <main className="bg-[#F8FAFC] text-slate-800 transition-colors duration-300 dark:bg-[#0F172A] dark:text-[#E2E8F0] min-h-screen pt-20 flex flex-col justify-between">
      <Navbar darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
      
      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <span className="text-xs font-bold tracking-widest text-brandorange-500 uppercase px-3 py-1 bg-brandorange-50 dark:bg-slate-800 rounded-full">About Biocyte</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Our Corporate Profile & Capabilities</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brandorange-500 to-tealaccent-500 mx-auto rounded-full" />
          </div>

          {/* Sub-Tabs Nav Controls (Consolidated layout) */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-10 border-b border-slate-200 dark:border-slate-800 no-scrollbar max-w-4xl mx-auto justify-start sm:justify-center">
            <button 
              onClick={() => setActiveTab("story")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === "story" 
                  ? "bg-brandorange-500 text-white shadow-md" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              Company Profile & Story
            </button>
            <button 
              onClick={() => setActiveTab("services")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === "services" 
                  ? "bg-brandorange-500 text-white shadow-md" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              Commercial Services
            </button>
            <button 
              onClick={() => setActiveTab("quality")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === "quality" 
                  ? "bg-brandorange-500 text-white shadow-md" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              Quality & Certifications
            </button>
            <button 
              onClick={() => setActiveTab("leaders")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === "leaders" 
                  ? "bg-brandorange-500 text-white shadow-md" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              }`}
            >
              Leadership & Partners
            </button>
          </div>

          {/* Sub-Views render grid */}
          <div className="transition-all duration-300">
            {activeTab === "story" && <About />}
            {activeTab === "services" && (
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {services.map((item, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-lg bg-brandorange-50 dark:bg-slate-800 text-brandorange-500 flex items-center justify-center mb-4">
                      <item.icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-800 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "quality" && (
              <div className="space-y-12">
                <Quality />
                <Certifications />
              </div>
            )}
            {activeTab === "leaders" && <Leaders />}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

