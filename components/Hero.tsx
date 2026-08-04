import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h2 className="text-2xl font-medium text-indigo-600 dark:text-indigo-400">Hello, i'm</h2>
        <h1 className="text-2xl md:text-6xl font-bold text-slate-800 dark:text-slate-50">{personalInfo.name}</h1>
        <h3 className="text-2xl font-semibold text-slate-600 dark:text-slate-300">{personalInfo.title}</h3>
        <p className="text-indigo-500 dark:text-indigo-400 text-lg font-bold leading-relaxed max-w-xl">
          {personalInfo.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
          <a href="#contact" className="px-8 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full font-medium hover:bg-indigo-700 hover:shadow-lg transition-all text-center">
            Hire Me
          </a>
          <a href="/documents/ATS_CV_M.Mudaffarsyah.pdf" className="px-8 py-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-full font-medium border border-indigo-200 dark:border-indigo-400/80 hover:bg-indigo-100 dark:hover:bg-indigo-500/30 transition-all text-center">
            Download CV
          </a>
        </div>
      </div>

      <div className="w-40 h-40 md:w-65 md:h-65 rounded-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 border-2 border-white dark:border-slate-800 shadow-xl overflow-hidden">
        <Image
          src="/images/owner.png"
          alt="Profile"
          width={288}
          height={288}
          className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-500"
          priority/>
      </div>
    </div>
  );
}