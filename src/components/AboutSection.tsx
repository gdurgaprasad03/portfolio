import { Code2, Database, Server, Zap } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust server-side applications with Python and Django",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing efficient database schemas with MySQL and Django ORM",
  },
  {
    icon: Code2,
    title: "API Development",
    description: "Creating RESTful APIs with proper validation and documentation",
  },
  {
    icon: Zap,
    title: "Problem Solving",
    description: "Debugging and optimizing code for better performance",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hello! I'm Durga Prasad, a passionate Python Developer based in Hyderabad, India. 
                I specialize in building backend systems that are not just functional, but 
                <span className="text-primary"> scalable, secure, and maintainable</span>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey in tech started with a curiosity for how things work behind the scenes. 
                Today, I channel that curiosity into creating enterprise-grade applications using 
                Django, REST frameworks, and modern development practices.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently, I'm working as a <span className="text-primary">Python Developer Intern at Sria Infotech</span>, 
                where I develop backend modules, integrate APIs, and collaborate with cross-functional 
                teams to deliver production-ready solutions.
              </p>

              {/* Quick Facts */}
              <div className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-4">Education</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">▹</span>
                    <span><strong className="text-foreground">MCA</strong> - Aurora's PG College (CGPA: 7.7)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">▹</span>
                    <span><strong className="text-foreground">B.Sc</strong> - Pragathi Degree College (CGPA: 8.65)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-subtle"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-heading font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
