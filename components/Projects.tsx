import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-4">
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        Projects
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden border border-indigo-300 dark:border-indigo-400/30 transition-all duration-300  hover:border-indigo-500 dark:hover:border-indigo-500 group">
            
            <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="p-6 space-y-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
              </a>
              <p className="text-slate-600 dark:text-slate-400 text-md leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <a 
          href="https://github.com/daffa267/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-3 bg-white dark:bg-slate-900 border border-indigo-300 dark:border-indigo-400/30 rounded-xl text-slate-500 dark:text-slate-300 font-medium hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 flex items-center gap-2"
        >
          View More
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  );
}