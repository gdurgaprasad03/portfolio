import { Code2, Cpu, Database, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "blue",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "HTML/CSS", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layout,
    color: "emerald",
    skills: [
      { name: "Django", level: 85 },
      { name: "Django REST", level: 85 },
      { name: "Spring Boot", level: 65 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "purple",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 80 },
      { name: "Django ORM", level: 85 },
    ],
  },
  {
    title: "Core Skills",
    icon: Cpu,
    color: "orange",
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "MVC Architecture", level: 85 },
      { name: "OOP", level: 85 },
      { name: "Git", level: 80 },
    ],
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-0 md:py-6 bg-[#fafafa] relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-12 animate-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 animate-pulse" />
            TECHNICAL EXPERTISE
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">Skills & Technologies</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through real projects and continuous learning
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const colorMap: Record<string, { icon: string; bar: string; light: string }> = {
              blue: { icon: "text-[#1e293b]", bar: "bg-gradient-to-r from-blue-600 to-emerald-500", light: "bg-slate-50" },
              emerald: { icon: "text-[#065f46]", bar: "bg-gradient-to-r from-blue-600 to-emerald-500", light: "bg-emerald-50/10" },
              purple: { icon: "text-[#4338ca]", bar: "bg-gradient-to-r from-blue-600 to-emerald-500", light: "bg-indigo-50/10" },
              orange: { icon: "text-[#92400e]", bar: "bg-gradient-to-r from-blue-600 to-emerald-500", light: "bg-amber-50/10" },
            };
            const colors = colorMap[category.color] || colorMap.blue;

            return (
              <div
                key={category.title}
                className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-gray-100 shadow-soft hover:shadow-premium transition-all duration-500 hover-lift animate-reveal stagger-${(idx % 4) + 1}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl ${colors.light}`}>
                    <Icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight uppercase tracking-widest">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-black text-gray-700 uppercase tracking-tighter">{skill.name}</span>
                        <span className="text-[10px] font-black text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100/50">
                        <div 
                          className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Developer Tools & Soft Skills */}
        <div className="max-w-6xl mx-auto mt-12 space-y-8">
          {/* Developer Tools */}
          <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white border border-gray-100 shadow-soft animate-reveal stagger-1">
            <h3 className="text-center text-lg md:text-xl font-bold text-gray-900 mb-6 md:mb-8 font-heading uppercase tracking-widest">Developer Tools</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {["VS Code", "Postman", "Git", "Eclipse", "MySQL Workbench"].map((tool) => (
                <div 
                  key={tool}
                  className="px-6 md:px-8 py-2 md:py-3 rounded-full bg-gray-900 text-white text-[12px] md:text-sm font-bold shadow-lg hover:scale-105 transition-transform cursor-default"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-blue-600 to-emerald-500 animate-reveal stagger-2">
            <h3 className="text-center text-lg md:text-xl font-bold text-white mb-6 md:mb-8 font-heading uppercase tracking-widest">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                { name: "Problem Solving", emoji: "🧩" },
                { name: "Communication", emoji: "💬" },
                { name: "Self-Learning", emoji: "📚" },
                { name: "Adaptability", emoji: "🔄" },
                { name: "Team Collaboration", emoji: "🤝" },
              ].map((skill) => (
                <div 
                  key={skill.name}
                  className="px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-md text-white text-[12px] md:text-sm font-bold flex items-center gap-2 border border-white/20 hover:bg-white/30 transition-colors"
                >
                  <span className="text-lg">{skill.emoji}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
