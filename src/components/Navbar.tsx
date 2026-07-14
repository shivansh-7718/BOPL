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
            <Link href="/" className="flex items-center group">
              <svg className="h-9 sm:h-10 w-auto text-slate-900 dark:text-white transition-colors duration-300" viewBox="0 0 245 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Orange Swooshes */}
                <g fill="#FF6B00">
                  <polygon points="197,4 203,4 204,5 209,5 210,6 214,6 215,7 217,7 218,8 220,8 221,9 223,9 224,10 225,10 226,11 227,11 228,12 229,12 231,14 232,14 237,19 237,20 238,21 238,23 239,24 239,30 238,31 238,32 237,33 237,35 236,36 236,37 233,40 233,41 225,49 224,49 222,51 221,51 218,54 217,54 215,56 214,56 213,57 212,57 211,58 207,58 207,56 212,51 212,50 214,48 214,47 216,45 216,43 217,42 217,41 218,40 218,36 219,35 219,33 218,32 218,26 217,25 217,24 216,23 216,22 215,21 215,20 213,18 213,17 205,9 204,9 202,7 201,7 199,5 200,5 201,6" fillRule="evenodd" />
                  <polygon points="40,34 41,34 41,38 39,40 39,41 36,44 36,45 34,47 34,48 33,49 33,51 32,52 32,55 31,56 31,64 32,65 32,67 33,68 33,70 34,71 34,72 36,74 36,75 45,84 46,84 49,87 50,87 51,88 52,88 53,89 48,89 47,88 41,88 40,87 36,87 35,86 33,86 32,85 30,85 29,84 27,84 26,83 25,83 24,82 23,82 22,81 21,81 20,80 19,80 17,78 16,78 15,77 15,76 12,73 12,72 11,71 11,61 12,60 12,59 13,58 13,57 14,56 14,55 18,51 18,50 19,49 20,49 21,48 21,47 22,47 28,41 29,41 31,39 32,39 34,37 35,37 36,36 37,36 38,35 40,35" fillRule="evenodd" />
                </g>
                {/* BOPL Text */}
                <g fill="currentColor">
                  <path d="M106,11 121,11 122,12 125,12 126,13 127,13 129,15 130,15 135,20 135,21 136,22 136,24 137,25 137,29 138,30 138,41 137,42 137,47 136,48 136,52 135,53 135,55 134,56 134,58 133,59 133,60 132,61 132,62 130,64 130,65 123,72 122,72 121,73 119,73 118,74 110,74 109,73 107,73 106,72 105,72 99,66 99,65 98,64 98,63 97,62 97,61 96,60 96,59 95,58 95,56 94,55 94,53 93,52 93,50 92,49 92,45 91,44 91,27 92,26 92,24 93,23 93,21 95,19 95,18 99,14 100,14 101,13 102,13 103,12 106,12 Z M111,24 117,24 118,25 120,25 121,26 122,26 123,27 123,28 124,29 124,33 125,34 125,38 124,39 124,45 123,46 123,49 122,50 122,52 121,53 121,54 120,55 120,57 118,59 118,60 111,60 109,58 109,57 108,56 108,55 107,54 107,52 106,51 106,49 105,48 105,43 104,42 104,30 105,29 105,28 106,27 106,26 107,26 108,25 111,25 Z" fillRule="evenodd" />
                  <polygon points="148,11 166,11 167,12 173,12 174,13 176,13 177,14 178,14 179,15 180,15 183,18 183,19 184,20 184,23 185,24 185,32 184,33 184,36 183,37 183,38 182,39 182,40 181,41 181,42 179,44 179,45 172,52 171,52 168,55 167,55 165,57 164,57 163,58 162,58 161,59 160,59 159,60 159,72 147,72 147,27 159,27 159,43 160,44 161,43 162,43 170,35 170,34 171,33 171,32 172,31 172,29 171,28 171,27 169,25 167,25 166,24 144,24 144,21 145,20 145,17 146,16 146,13 147,12 148,12 147,13" fillRule="evenodd" />
                  <polygon points="43,12 70,12 71,13 74,13 75,14 76,14 77,15 78,15 80,17 80,18 81,19 81,21 82,22 82,30 81,31 81,33 80,34 80,35 79,36 79,37 76,40 76,41 82,47 82,48 83,49 83,50 84,51 84,54 85,55 85,61 84,62 84,65 79,70 78,70 77,71 76,71 75,72 43,72 43,28 44,27 48,27 49,28 51,28 52,27 54,27 55,28 55,59 56,60 57,60 58,61 59,61 60,60 68,60 70,58 70,54 69,53 69,52 58,41 57,41 67,31 67,30 68,29 68,28 65,25 40,25 40,21 41,20 41,17 42,16 42,13 43,13" fillRule="evenodd" />
                  <polygon points="193,12 204,12 204,13 205,14 205,53 204,54 204,55 205,56 205,58 207,60 223,60 223,62 222,63 222,65 221,66 221,70 220,71 220,72 192,72 192,13 193,13" fillRule="evenodd" />
                </g>
              </svg>
              <span className="hidden sm:block text-[13px] font-bold text-slate-500 dark:text-slate-400 font-sans tracking-wide">
                Life <span className="text-brandorange-500 font-black">.</span> Health <span className="text-brandorange-500 font-black">.</span> Happiness
              </span>
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
              <svg className="h-8 w-auto text-slate-800 dark:text-white transition-colors duration-300" viewBox="0 0 245 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Orange Swooshes */}
                <g fill="#FF6B00">
                  <polygon points="197,4 203,4 204,5 209,5 210,6 214,6 215,7 217,7 218,8 220,8 221,9 223,9 224,10 225,10 226,11 227,11 228,12 229,12 231,14 232,14 237,19 237,20 238,21 238,23 239,24 239,30 238,31 238,32 237,33 237,35 236,36 236,37 233,40 233,41 225,49 224,49 222,51 221,51 218,54 217,54 215,56 214,56 213,57 212,57 211,58 207,58 207,56 212,51 212,50 214,48 214,47 216,45 216,43 217,42 217,41 218,40 218,36 219,35 219,33 218,32 218,26 217,25 217,24 216,23 216,22 215,21 215,20 213,18 213,17 205,9 204,9 202,7 201,7 199,5 200,5 201,6" fillRule="evenodd" />
                  <polygon points="40,34 41,34 41,38 39,40 39,41 36,44 36,45 34,47 34,48 33,49 33,51 32,52 32,55 31,56 31,64 32,65 32,67 33,68 33,70 34,71 34,72 36,74 36,75 45,84 46,84 49,87 50,87 51,88 52,88 53,89 48,89 47,88 41,88 40,87 36,87 35,86 33,86 32,85 30,85 29,84 27,84 26,83 25,83 24,82 23,82 22,81 21,81 20,80 19,80 17,78 16,78 15,77 15,76 12,73 12,72 11,71 11,61 12,60 12,59 13,58 13,57 14,56 14,55 18,51 18,50 19,49 20,49 21,48 21,47 22,47 28,41 29,41 31,39 32,39 34,37 35,37 36,36 37,36 38,35 40,35" fillRule="evenodd" />
                </g>
                {/* BOPL Text */}
                <g fill="currentColor">
                  <path d="M106,11 121,11 122,12 125,12 126,13 127,13 129,15 130,15 135,20 135,21 136,22 136,24 137,25 137,29 138,30 138,41 137,42 137,47 136,48 136,52 135,53 135,55 134,56 134,58 133,59 133,60 132,61 132,62 130,64 130,65 123,72 122,72 121,73 119,73 118,74 110,74 109,73 107,73 106,72 105,72 99,66 99,65 98,64 98,63 97,62 97,61 96,60 96,59 95,58 95,56 94,55 94,53 93,52 93,50 92,49 92,45 91,44 91,27 92,26 92,24 93,23 93,21 95,19 95,18 99,14 100,14 101,13 102,13 103,12 106,12 Z M111,24 117,24 118,25 120,25 121,26 122,26 123,27 123,28 124,29 124,33 125,34 125,38 124,39 124,45 123,46 123,49 122,50 122,52 121,53 121,54 120,55 120,57 118,59 118,60 111,60 109,58 109,57 108,56 108,55 107,54 107,52 106,51 106,49 105,48 105,43 104,42 104,30 105,29 105,28 106,27 106,26 107,26 108,25 111,25 Z" fillRule="evenodd" />
                  <polygon points="148,11 166,11 167,12 173,12 174,13 176,13 177,14 178,14 179,15 180,15 183,18 183,19 184,20 184,23 185,24 185,32 184,33 184,36 183,37 183,38 182,39 182,40 181,41 181,42 179,44 179,45 172,52 171,52 168,55 167,55 165,57 164,57 163,58 162,58 161,59 160,59 159,60 159,72 147,72 147,27 159,27 159,43 160,44 161,43 162,43 170,35 170,34 171,33 171,32 172,31 172,29 171,28 171,27 169,25 167,25 166,24 144,24 144,21 145,20 145,17 146,16 146,13 147,12 148,12 147,13" fillRule="evenodd" />
                  <polygon points="43,12 70,12 71,13 74,13 75,14 76,14 77,15 78,15 80,17 80,18 81,19 81,21 82,22 82,30 81,31 81,33 80,34 80,35 79,36 79,37 76,40 76,41 82,47 82,48 83,49 83,50 84,51 84,54 85,55 85,61 84,62 84,65 79,70 78,70 77,71 76,71 75,72 43,72 43,28 44,27 48,27 49,28 51,28 52,27 54,27 55,28 55,59 56,60 57,60 58,61 59,61 60,60 68,60 70,58 70,54 69,53 69,52 58,41 57,41 67,31 67,30 68,29 68,28 65,25 40,25 40,21 41,20 41,17 42,16 42,13 43,13" fillRule="evenodd" />
                  <polygon points="193,12 204,12 204,13 205,14 205,53 204,54 204,55 205,56 205,58 207,60 223,60 223,62 222,63 222,65 221,66 221,70 220,71 220,72 192,72 192,13 193,13" fillRule="evenodd" />
                </g>
              </svg>
              <span className="text-[9px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase ml-2 border-l border-slate-200 dark:border-slate-850 pl-2">
                Life <span className="text-brandorange-500 font-black">.</span> Health <span className="text-brandorange-500 font-black">.</span> Happiness
              </span>
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
