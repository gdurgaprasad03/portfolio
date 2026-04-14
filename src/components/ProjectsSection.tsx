import { ExternalLink, Github, FileText, Globe, Layout } from "lucide-react";

const projects = [
  {
    title: "Social Media Hub Integration",
    description:
      "A centralized platform for real-time, multi-platform content distribution. Connect and post to Instagram, Facebook, and LinkedIn simultaneously from a single dashboard.",
    tech: ["Python", "Django", "Celery", "Redis", "Social APIs"],
    highlights: [
      "Simultaneous posting to multiple social platforms",
      "Asynchronous task handling with Celery and Redis",
      "OAuth2 integration for secure platform authentication",
      "Unified dashboard for managing multi-channel content",
      "Comprehensive error handling for API interactions",
    ],
    stats: [
      { label: "Platforms", value: "Multi-Channel" },
      { label: "Sync Speed", value: "< 2s" },
      { label: "Stability", value: "Enterprise" },
    ],
    github: "https://github.com/gdurgaprasad03",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=1000",
    icon: Globe,
  },
  {
    title: "Enterprise E-commerce Platform",
    description:
      "Full-featured e-commerce ecosystem with custom category management, advanced search, and high-performance ordering systems.",
    tech: ["Python", "Django", "MySQL", "Postman", "JWT"],
    highlights: [
      "Scalable category/subcategory management system",
      "Unified login representing both Admin and Customer flows",
      "Advanced lookup optimizations for product search",
      "Robust state management for order processing",
      "Production-ready API documentation and testing",
    ],
    stats: [
      { label: "Architecture", value: "Scalable" },
      { label: "Response", value: "Sub-50ms" },
      { label: "Security", value: "JWT Auth" },
    ],
    github: "https://github.com/gdurgaprasad03",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000",
    icon: Layout,
  },
  {
    title: "Expense Tracker & Reimbursement System",
    description:
      "Built a production-ready expense management system that handles the complete lifecycle of employee reimbursements — from submission to approval to payment.",
    tech: ["Python", "Django REST", "JWT", "SQLite", "Git"],
    highlights: [
      "JWT authentication with OTP-based password recovery",
      "Automated expense status tracking (Unpaid → Partially Paid → Paid)",
      "Excel & PDF report generation for financial analysis",
      "Role-based access control with audit logging",
      "Atomic transactions ensuring data integrity",
    ],
    stats: [
      { label: "Flow Status", value: "Automated" },
      { label: "Reports", value: "Financial" },
      { label: "Export", value: ".xlsx / .pdf" },
    ],
    github: "https://github.com/gdurgaprasad03",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    icon: FileText,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-0 md:py-6 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-12 animate-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-[0_0_15px_-3px_rgba(79,70,229,0.2)]">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-cyan-400 animate-pulse" />
            FEATURED WORKS
          </div>
          <h2 className="text-3xl md:text-6xl font-black font-heading mb-4 text-foreground drop-shadow-md tracking-tighter leading-tight md:leading-none">Projects I've Built.</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-medium">
            Real-world applications showcasing my backend development skills
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center animate-reveal stagger-${(index % 2) + 1}`}
            >
              {/* Project Visual Column */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-soft group-hover:shadow-premium transition-all duration-700">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover scale-100 group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Floating Header */}
                  <div className="absolute top-6 right-6 p-4 rounded-2xl bg-card/90 backdrop-blur-md shadow-[0_0_30px_rgba(79,70,229,0.3)] border border-border transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <project.icon className="w-6 h-6 text-foreground" />
                  </div>

                  {/* High-End Metrics Card */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-wrap lg:flex-nowrap gap-2 md:gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex-1 min-w-[80px] p-3 md:p-4 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-xl md:rounded-2xl shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]">
                        <p className="text-[8px] md:text-[9px] text-white/60 uppercase font-black tracking-widest mb-1">{stat.label}</p>
                        <p className="text-[10px] md:text-xs font-black text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-5xl font-black text-foreground drop-shadow-md leading-[1.1] tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="w-2 h-2 mt-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(79,70,229,0.8)] transition-transform group-hover/item:scale-150" />
                      <span className="text-foreground drop-shadow-sm text-sm md:text-base font-bold leading-normal">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-1.5 rounded-xl bg-card text-muted-foreground text-[10px] font-black uppercase tracking-wider border border-border hover:bg-muted hover:text-accent hover:border-accent/40 shadow-sm hover:shadow-[0_0_15px_-3px_rgba(79,70,229,0.3)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-foreground text-xs font-black uppercase tracking-widest hover:text-accent transition-colors drop-shadow-sm"
                  >
                    <Github className="w-4 h-4 transition-transform group-hover/link:-rotate-12" />
                    Source Code
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-foreground text-xs font-black uppercase tracking-widest hover:text-accent transition-colors drop-shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
