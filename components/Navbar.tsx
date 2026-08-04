"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        
        <a href="#home" className="text-xl font-bold text-slate-800 dark:text-slate-100 z-10">
          Mudaff<span className="text-indigo-600 dark:text-indigo-400">syah.</span>
        </a>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex space-x-10 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a></li>
          </ul>
        </div>
        
        <div className="flex items-center gap-3 z-10">
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </button>
          )}

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-slate-800 dark:text-slate-100 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>

      </div>

      <div 
        className={`absolute top-full left-0 w-full bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xl origin-top transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col space-y-2 px-6 py-6 text-sm font-medium text-slate-600 dark:text-slate-300 text-center">
          <li><a href="#home" onClick={() => setIsOpen(false)} className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)} className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)} className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}