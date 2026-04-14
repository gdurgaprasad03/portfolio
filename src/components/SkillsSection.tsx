import { Code2, Cpu, Database, Layout } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-0 md:py-6 bg-background relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-12 animate-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-[0_0_15px_-3px_rgba(79,70,229,0.2)]">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-cyan-400 animate-pulse" />
            TECHNICAL EXPERTISE
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground drop-shadow-md leading-tight">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through real projects and continuous learning
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const colorMap: Record<string, { icon: string; bar: string; light: string }> = {
              blue: { icon: "text-[#4F46E5]", bar: "bg-gradient-to-r from-accent to-cyan-400 shadow-[0_0_10px_rgba(79,70,229,0.8)]", light: "bg-accent/10 border border-accent/20" },
              emerald: { icon: "text-[#06B6D4]", bar: "bg-gradient-to-r from-accent to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]", light: "bg-cyan-500/10 border border-cyan-500/20" },
              purple: { icon: "text-[#8B5CF6]", bar: "bg-gradient-to-r from-accent to-cyan-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]", light: "bg-purple-500/10 border border-purple-500/20" },
              orange: { icon: "text-[#F59E0B]", bar: "bg-gradient-to-r from-accent to-cyan-400 shadow-[0_0_10px_rgba(245,158,11,0.8)]", light: "bg-amber-500/10 border border-amber-500/20" },
            };
            const colors = colorMap[category.color] || colorMap.blue;

            return (
              <div
                key={category.title}
                className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-card border border-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.2)] hover:border-accent/40 transition-all duration-500 hover-lift animate-reveal stagger-${(idx % 4) + 1}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl ${colors.light}`}>
                    <Icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-black text-foreground drop-shadow-sm tracking-tight uppercase tracking-widest">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-black text-foreground uppercase tracking-tighter">{skill.name}</span>
                        <span className="text-[10px] font-black text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-border">
                        <div 
                          className={`h-full ${colors.bar} rounded-full transition-all duration-1500 ease-out`}
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
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
          <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-card border border-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] animate-reveal stagger-1">
            <h3 className="text-center text-lg md:text-xl font-bold text-foreground drop-shadow-md mb-6 md:mb-8 font-heading uppercase tracking-widest">Developer Tools</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {["VS Code", "Postman", "Git", "Eclipse", "MySQL Workbench"].map((tool) => (
                <div 
                  key={tool}
                  className="px-6 md:px-8 py-2 md:py-3 rounded-full bg-muted border border-border text-muted-foreground text-[12px] md:text-sm font-bold shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:text-accent hover:border-accent/40 hover:shadow-[0_0_15px_-3px_rgba(79,70,229,0.5)] hover:scale-105 transition-all cursor-default"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-accent to-cyan-500 shadow-[0_0_40px_-10px_rgba(79,70,229,0.4)] animate-reveal stagger-2">
            <h3 className="text-center text-lg md:text-xl font-bold text-white drop-shadow-sm mb-6 md:mb-8 font-heading uppercase tracking-widest">Soft Skills</h3>
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
