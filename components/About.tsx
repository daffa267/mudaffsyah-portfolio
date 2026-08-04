import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-4">
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        About
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
      </h2>
        <div className="bg-white/50 dark:bg-slate-900/50 p-8 rounded-2xl border border-indigo-300 dark:border-indigo-400/30 ">        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-md">
          {personalInfo.about}
        </p>
      </div>
    </div>
  );
}