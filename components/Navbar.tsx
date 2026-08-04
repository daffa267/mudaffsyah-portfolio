"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk Hamburger Menu

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center relative">
        
        {/* Tombol Hamburger (Hanya muncul di Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-800 dark:text-slate-100 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>

       
        <div className="flex flex-1 items-center justify-center md:gap-10">
          
          {/* Menu Navigasi Desktop */}
          <ul className="hidden md:flex space-x-10 text-md font-semibold text-slate-600 dark:text-slate-300">
            <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a></li>
          </ul>
          
          {/* Tombol Dark/Light Mode */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="absolute right-6 md:static w-11 h-11 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>
          )}
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 dark:hover:text-indigo-400">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 dark:hover:text-indigo-400">About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 dark:hover:text-indigo-400">Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}