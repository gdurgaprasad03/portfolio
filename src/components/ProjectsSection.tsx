import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Expense Tracker & Reimbursement System",
    description:
      "A comprehensive backend system for managing employee expense requests and reimbursements with role-based access control, automated payment status tracking, and detailed reporting.",
    tech: ["Python", "Django REST Framework", "JWT", "SQLite", "Excel", "PDF"],
    highlights: [
      "Built secure authentication with JWT and OTP-based password reset",
      "Implemented automatic status handling (Unpaid → Partially Paid → Paid)",
      "Developed Excel & PDF report exports for expense analysis",
      "Ensured data integrity with atomic transactions and audit logging",
    ],
    github: "https://github.com/gdurgaprasad03",
    featured: true,
  },
  {
    title: "Interview Insight Hub",
    description:
      "A web platform providing categorized interview preparation resources for students, featuring question search, filters, and content management capabilities.",
    tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Built categorized interview prep resources with search & filters",
      "Developed clean, responsive UI with modular design patterns",
      "Implemented servlet-based backend with MySQL database",
      "Ensured smooth data flow with proper separation of concerns",
    ],
    github: "https://github.com/gdurgaprasad03",
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-subtle"
              >
                <div className="flex items-start justify-between mb-6">
                  <Folder className="w-12 h-12 text-primary" />
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-primary mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
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

export default ProjectsSection;
