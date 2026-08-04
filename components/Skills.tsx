export default function Skills() {
  const skillsData = [
  { 
    category: "Web & Backend Development", 
    items: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
    ] 
  },
  { 
    category: "Mobile Development", 
    items: [
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" }
    ] 
  },
  { 
    category: "AI & Machine Learning", 
    items: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Google Colab", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" }
    ] 
  },
  { 
    category: "Database & Tools", 
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" }
    ] 
  }
];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-4">
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        Skills
        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {skillsData.map((skillGroup, index) => (
          <div 
            key={index} 
            className="h-full bg-slate-100/50 dark:bg-slate-800/60 p-8 rounded-2xl border border-indigo-300 dark:border-indigo-400/30 flex flex-col items-center transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-500 group"
          >
            <h3 className="text-xl font-medium text-slate-500 dark:text-slate-300 mb-8 text-center transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {skillGroup.category}
            </h3>
            
            <div className="w-full flex flex-wrap justify-center gap-4">
              {skillGroup.items.map((skill, i) => (
                <div 
                  key={i} 
                  className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center overflow-hidden hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer p-3 border border-indigo-300 dark:border-indigo-400/50"
                >
                  {skill.icon && (
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                  )}
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}