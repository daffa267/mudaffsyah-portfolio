import { educationData, experienceData } from "@/data/portfolio";

export default function EduAndExp() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-4">
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        Education & Experience
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        
        {/* Kolom Edukasi */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            Education
          </h3>
          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-8">
            {educationData.map((item, i) => (
              <div key={i} className="relative pl-8 group">
                <div className="absolute -left-9 top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-50 dark:border-slate-950 group-hover:scale-150 transition-transform duration-300" />
                <div className="space-y-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 pt-2">{item.degree}</h4>
                  <p className="text-md font-medium text-indigo-600 dark:text-indigo-400">{item.institution}</p>
                  <p className="text-md text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Pengalaman */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            Experience
          </h3>
          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-8">
            {experienceData.map((item, i) => (
              <div key={i} className="relative pl-8 group">
                <div className="absolute -left-9 top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-50 dark:border-slate-950 group-hover:scale-150 transition-transform duration-300" />
                <div className="space-y-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 pt-2">{item.role}</h4>
                  <p className="text-md font-medium text-indigo-600 dark:text-indigo-400">{item.organization}</p>
                  <p className="text-md text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}