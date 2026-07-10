"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Award, Container, Globe, Building } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("dark-mode") === "enabled";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }

    // HTML5 Canvas Molecule Background Animation (Orange Nodes)
    const canvas = document.getElementById("molecule-canvas-next") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Array<any> = [];
    const maxParticles = 30;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class MoleculeParticle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 2;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const isDarkTheme = document.documentElement.classList.contains("dark");
        ctx.fillStyle = isDarkTheme ? "rgba(255, 107, 0, 0.45)" : "rgba(255, 107, 0, 0.18)";
        ctx.fill();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      for (let i = 0; i < maxParticles; i++) {
        particlesArray.push(new MoleculeParticle());
      }
    };
    initParticles();

    const drawLines = () => {
      if (!ctx) return;
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            const isDarkTheme = document.documentElement.classList.contains("dark");
            ctx.strokeStyle = isDarkTheme ? `rgba(0, 184, 169, ${0.15 - dist/800})` : `rgba(0, 184, 169, ${0.07 - dist/1500})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    let animId: number;
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });
      drawLines();
      animId = requestAnimationFrame(animateParticles);
    };
    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleToggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    const isDark = root.classList.contains("dark");
    setDarkMode(isDark);
    localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
  };

  return (
    <main className="bg-[#F8FAFC] text-slate-800 transition-colors duration-300 dark:bg-[#0F172A] dark:text-[#E2E8F0] min-h-screen relative overflow-hidden flex flex-col justify-between">
      {/* Canvas Particle Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <canvas id="molecule-canvas-next" className="w-full h-full opacity-35 dark:opacity-20" />
      </div>

      <div className="relative z-10 w-full flex-grow flex flex-col">
        <Navbar darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
        
        {/* Main Hero View */}
        <Hero />

        {/* Highlights Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/about" className="glass-card p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-center hover:scale-102 transition-all">
              <Award className="w-5 h-5 text-brandorange-500 mb-2" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Incorporated</span>
              <span className="text-lg font-extrabold mt-0.5">2002</span>
            </Link>
            <Link href="/products" className="glass-card p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-center hover:scale-102 transition-all">
              <Container className="w-5 h-5 text-tealaccent-500 mb-2" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Products Range</span>
              <span className="text-lg font-extrabold mt-0.5">50+ Items</span>
            </Link>
            <Link href="/about" className="glass-card p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-center hover:scale-102 transition-all">
              <Globe className="w-5 h-5 text-softgreen-500 mb-2" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Market Reach</span>
              <span className="text-lg font-extrabold mt-0.5">Pan UP</span>
            </Link>
            <Link href="/contact" className="glass-card p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-center hover:scale-102 transition-all">
              <Building className="w-5 h-5 text-yellow-500 mb-2" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Headquarters</span>
              <span className="text-lg font-extrabold mt-0.5">Kanpur, UP</span>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

