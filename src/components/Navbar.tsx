"use client";

import { useState } from "react";
import { Dna, Sun, Moon, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navbar({ darkMode, onToggleDarkMode }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  {/* Beautiful BOPL SVG Logo with orbiting swoosh */}
                  <svg className="h-10 w-auto text-slate-800 dark:text-white transition-colors duration-300" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Left swoosh orbit */}
                    <path d="M 22,5 A 16,16 0 1,0 35,28" stroke="#FF6B00" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    <circle cx={35} cy={28} r="2.5" fill="#FF6B00" />
                    {/* BOPL Text */}
                    <text x={16} y={29} fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif" fontWeight="800" fontStyle="italic" fontSize={24} fill="currentColor">BOPL</text>
                  </svg>
                </div>
                <div className="hidden sm:flex flex-col border-l border-slate-200 dark:border-slate-800 pl-3">
                  <span className="text-[11px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Life . Health . Happiness</span>
                  <span className="text-[8px] font-bold tracking-widest text-slate-400 dark:text-slate-600 uppercase -mt-0.5">Biocyte Organics</span>
                </div>
              </div>
            </Link>

            {/* STREAMLINED NAVBAR LINKS */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                      isActive 
                        ? "text-brandorange-500 bg-brandorange-50/50 dark:bg-slate-800" 
                        : "text-slate-600 dark:text-slate-300 hover:text-brandorange-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search formulations..."
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="w-40 pl-9 pr-4 py-2 rounded-full border border-slate-200 bg-white/50 text-xs focus:w-56 focus:border-brandorange-500 focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-900/50 dark:focus:bg-slate-950 transition-all duration-300"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>

              <button
                onClick={onToggleDarkMode}
                className="p-2.5 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-yellow-400 hover:scale-105 transition-all duration-300"
              >
                {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>

              <Link
                href="/products"
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-brandorange-500 to-brandorange-600 text-white hover:shadow-lg transition-all"
              >
                Explore Products
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button
                onClick={onToggleDarkMode}
                className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-yellow-400"
              >
                {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>
              <button
                onClick={() => setDrawerOpen(!drawerOpen)}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {drawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      {drawerOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer Panel (Placed outside header to prevent transparency/clipping inheritance) */}
      <div className={`fixed inset-y-0 right-0 z-50 w-72 bg-white dark:bg-slate-900 shadow-2xl p-6 border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between lg:hidden transition-transform duration-300 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center space-x-2">
              {/* Beautiful BOPL SVG Logo with orbiting swoosh */}
              <svg className="h-8 w-auto text-slate-800 dark:text-white transition-colors duration-300" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left swoosh orbit */}
                <path d="M 22,5 A 16,16 0 1,0 35,28" stroke="#FF6B00" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <circle cx={35} cy={28} r="2.5" fill="#FF6B00" />
                {/* BOPL Text */}
                <text x={16} y={29} fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif" fontWeight="800" fontStyle="italic" fontSize={24} fill="currentColor">BOPL</text>
              </svg>
              <span className="text-[9px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase ml-2 border-l border-slate-200 dark:border-slate-850 pl-2">Life. Health. Happiness</span>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-3 flex flex-col text-sm font-semibold">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
          <Link
            href="/products"
            onClick={() => setDrawerOpen(false)}
            className="block w-full text-center py-3 bg-brandorange-500 text-white font-bold rounded-xl text-xs shadow-md"
          >
            Explore Catalog
          </Link>
        </div>
      </div>
    </>
  );
}
