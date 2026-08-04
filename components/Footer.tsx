export default function Footer() {
  return (
    <footer id="contact" className="w-full py-4 border-t border-slate-200 dark:border-slate-800 mt-12">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">        
        <div className="flex items-center gap-8">
          
          {/* GitHub */}
          <a
            href="https://github.com/daffa267"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-4xl border-2 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center transition-all duration-300 group-hover:border-[#0A66C2] group-hover:text-[#0A66C2]">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-[#0A66C2] transition-colors">
              Github
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/m-mudaffarsyah-89752b372"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-4xl border-2 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center transition-all duration-300 group-hover:border-[#0A66C2] group-hover:text-[#0A66C2]">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-[#0A66C2] transition-colors">
              LinkedIn
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/dafff_._"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-4xl border-2 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center transition-all duration-300 group-hover:border-[#0A66C2] group-hover:text-[#0A66C2]">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-[#0A66C2] transition-colors">
              Instagram
            </span>
          </a>
        </div>

        {/* Contact & Copyright */}
        <div className="text-center md:text-right space-y-2">
          <p className="font-medium text-xl text-slate-500 dark:text-slate-400">
            Contact me.
          </p>
          <p>
            <u>
              <a href="mailto:mudaffsyah@gmail.com" className="ml-2 text-md font-bold text-blue-500 dark:text-blue-400">
                mudaffsyah@gmail.com
              </a>
            </u>
          </p>
          <p className="text-m text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} M. Mudaffarsyah. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}