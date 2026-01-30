const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    skills: ["Django", "Django REST Framework", "Spring Boot"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQLite", "Django ORM"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Eclipse"],
  },
  {
    title: "Core Concepts",
    skills: ["REST APIs", "OOP", "MVC Architecture", "JWT Auth", "SQL Queries", "Debugging"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Problem Solving", "Adaptability", "Self-Learning", "Team Collaboration"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Here are the technologies and tools I work with to build robust, scalable applications.
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-heading text-lg font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
