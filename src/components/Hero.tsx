"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck, Biohazard } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const stats = [
    { value: "24+", label: "Years Journey" },
    { value: "35+", label: "Active Formulations" },
    { value: "100%", label: "Quality Checked" }
  ];

  return (
    <section id="home" className="relative min-h-[85vh] pt-32 pb-16 flex items-center overflow-hidden bg-gradient-to-br from-brandorange-50/40 via-white to-tealaccent-50/20 dark:from-[#1b140c] dark:via-[#0F172A] dark:to-[#0c1b1a] w-full">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,0,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Headline & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border-slate-200/70 text-xs font-semibold text-brandorange-500 dark:text-brandorange-400 dark:border-slate-800 shadow-sm animate-bounce">
            <ShieldCheck className="w-4 h-4 text-tealaccent-500" />
            <span>WHO-GMP & ISO 9001:2015 Accredited</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight lg:leading-[1.1] text-slate-900 dark:text-white">
            Advancing Healthcare <br className="hidden sm:inline" />
            Through <span className="bg-gradient-to-r from-brandorange-500 via-brandorange-400 to-tealaccent-500 bg-clip-text text-transparent">Innovation</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 font-medium">
            Delivering quality pharmaceutical solutions with an unwavering commitment to scientific excellence, rigorous quality testing, and global patient well-being.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/products" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-brandorange-500 to-brandorange-600 text-white shadow-xl shadow-brandorange-500/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2">
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm glass-card hover:bg-slate-100/50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-330 hover:scale-105 transition-all flex items-center justify-center space-x-2">
              <PhoneCall className="w-4 h-4 text-tealaccent-500" />
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/50 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
            {stats.map((stat, i) => (
              <div key={i}>
                <span className="block text-2xl sm:text-3xl font-extrabold text-brandorange-500 dark:text-brandorange-400">{stat.value}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Graphic Biotech Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-brandorange-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-tealaccent-400/10 rounded-full blur-3xl" />

          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-slate-200/30 dark:border-slate-700/20 shadow-inner flex items-center justify-center">
            <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-dashed border-tealaccent-500/20 animate-spin" style={{ animationDuration: '40s' }} />
          </div>

          <div className="absolute glass-card p-6 sm:p-8 rounded-3xl w-64 sm:w-76 border border-slate-200/60 dark:border-slate-800/60 shadow-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brandorange-500 to-tealaccent-400 text-white flex items-center justify-center shadow-lg shadow-brandorange-500/20 mb-4 animate-pulse">
              <Biohazard className="w-8 h-8" />
            </div>
            <span className="text-[10px] font-bold tracking-widest text-tealaccent-500 uppercase">Chemical Synthesis</span>
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mt-1">Research & Formulation</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Developing targeted medical molecules with high bioavailability and strict patient tolerance.</p>
            
            <div className="w-full mt-5 bg-slate-100/50 dark:bg-slate-800/50 rounded-xl p-3 border border-slate-200/30 dark:border-slate-700/30 text-left">
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
                <span>Bioavailability Assay</span>
                <span className="text-softgreen-500 font-extrabold">94%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-brandorange-500 to-tealaccent-500 h-full rounded-full" style={{ width: "94%" }} />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

