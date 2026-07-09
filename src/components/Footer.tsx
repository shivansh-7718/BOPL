"use client";

import { Dna, Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed! Check your email for validation assays.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-slate-800/80 z-20 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 mb-16">
        
        {/* Brand */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center space-x-3.5">
            <svg className="h-9 w-auto text-white transition-colors duration-300" viewBox="0 0 95 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left orange swoop */}
              <path d="M 23 33 C 8 33 2 20 8 7 C 5 17 9 27 21 29 C 23 29 24 31 24 33 Z" fill="#FF6B00" />
              {/* Right orange swoop */}
              <path d="M 67 7 C 82 7 88 20 82 33 C 85 23 81 13 69 11 C 67 11 66 9 66 7 Z" fill="#FF6B00" />
              {/* BOPL Text */}
              <text x="17" y="30" fontFamily="'Outfit', 'Plus Jakarta Sans', 'Inter', sans-serif" fontWeight="900" fontSize="28" fill="currentColor" letterSpacing="-1">BOPL</text>
            </svg>
            <span className="text-[11px] font-extrabold tracking-wide text-slate-400 font-sans">
              Life . Health . Happiness
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Incorporated in 2002, Biocyte Organics Private Limited is an Indian pharmaceutical enterprise delivering high-efficiency capsules, syrups, and medical breathing devices.
          </p>
          <div className="flex space-x-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brandorange-500 hover:text-white transition-colors flex items-center justify-center"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brandorange-500 hover:text-white transition-colors flex items-center justify-center"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brandorange-500 hover:text-white transition-colors flex items-center justify-center"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Links 1 */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-bold text-xs uppercase text-white tracking-wider">Quick Navigation</h4>
          <div className="flex flex-col space-y-2.5 text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home Base</Link>
            <Link href="/about" className="hover:text-white transition-colors">Company Story</Link>
            <Link href="/products" className="hover:text-white transition-colors">Product Range</Link>
            <Link href="/manufacturing" className="hover:text-white transition-colors">Manufacturing</Link>
            <Link href="/quality" className="hover:text-white transition-colors">Quality Control</Link>
            <Link href="/careers" className="hover:text-white transition-colors">Work With Us</Link>
          </div>
        </div>

        {/* Links 2 */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-bold text-xs uppercase text-white tracking-wider">Key Portfolios</h4>
          <div className="flex flex-col space-y-2.5 text-xs">
            <Link href="/products" className="hover:text-white transition-colors">Critical Devices (CPAP/Concentrators)</Link>
            <Link href="/products" className="hover:text-white transition-colors">Cardiovascular Medicines</Link>
            <Link href="/products" className="hover:text-white transition-colors">Gastrointestinal Care</Link>
            <Link href="/products" className="hover:text-white transition-colors">Nutritional & B-Complex</Link>
            <Link href="/certifications" className="hover:text-white transition-colors">ISO 9001:2015 Certification</Link>
            <Link href="/certifications" className="hover:text-white transition-colors">GMP Standard Verification</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-bold text-xs uppercase text-white tracking-wider">Newsletter Hub</h4>
          <p className="text-xs text-slate-400 leading-relaxed">Sign up with your professional email address to receive chemical synthesis and pipeline expansion bulletins.</p>
          <form onSubmit={handleSubscribe} className="relative">
            <input 
              type="email" 
              placeholder="Your work email..." 
              required 
              className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-xs focus:outline-none focus:border-brandorange-500 text-white" 
            />
            <button type="submit" className="absolute right-1 top-1 bg-brandorange-500 hover:bg-brandorange-600 text-white p-1.5 rounded-lg transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Sub Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
        <div>
          <span>&copy; 2026 Biocyte Organics Private Limited. All Rights Reserved. (CIN: U51397UP2002PTC027074)</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-slate-400">Terms of Commerce</a>
          <a href="#" className="hover:text-slate-400">Patient Privacy Guidelines</a>
          <a href="#" className="hover:text-slate-400">Quality Assurances</a>
        </div>
      </div>
    </footer>
  );
}

