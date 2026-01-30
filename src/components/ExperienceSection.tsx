import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Python Developer Intern",
    company: "Sria Infotech Pvt Ltd",
    location: "Hyderabad",
    period: "May 2025 – Present",
    points: [
      "Developing backend modules using Python, Django, and MySQL for enterprise applications",
      "Building and integrating RESTful APIs to support frontend and mobile clients",
      "Writing unit tests, debugging issues, and improving API performance by 30%",
      "Collaborating with senior developers using Git, Postman, and VS Code",
      "Implementing new features while maintaining clean, optimized code",
    ],
  },
  {
    type: "education",
    title: "Java Full Stack Trainee",
    company: "Codegnan Destination",
    location: "Training Program",
    period: "2024",
    points: [
      "Mastered Core Java, OOP concepts, and servlet-based architecture",
      "Built hands-on expertise in HTML, CSS, JavaScript for frontend development",
      "Wrote optimized SQL queries and managed MySQL databases",
      "Developed multiple mini-projects demonstrating full-stack integration",
      "Practiced MVC architecture patterns for scalable Java applications",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-4 top-0 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    {exp.type === "work" ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-muted-foreground text-sm font-mono mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5 text-sm">▹</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
