"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <main className="bg-[#F8FAFC] text-slate-800 transition-colors duration-300 dark:bg-[#0F172A] dark:text-[#E2E8F0] min-h-screen pt-20 flex flex-col justify-between">
      <Navbar darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
      <div className="flex-grow py-12">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

