import { ExternalLink, Github, FileText, Globe } from "lucide-react";

const projects = [
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
      { label: "API Endpoints", value: "15+" },
      { label: "Auth Features", value: "JWT + OTP" },
      { label: "Export Formats", value: "Excel, PDF" },
    ],
    github: "https://github.com/gdurgaprasad03",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000",
    icon: FileText,
  },
  {
    title: "Interview Insight Hub",
    description:
      "A specialized portal designed to help students master technical interviews through categorized resources, real-world questions, and structured study paths.",
    tech: ["Java", "MySQL", "Servlet", "JavaScript", "CSS"],
    highlights: [
      "Dynamic question categorization with advanced filtering",
      "Robust core-Java backend for high-performance resource delivery",
      "Secure MySQL integration with optimized query patterns",
      "Modular MVC architecture for easy feature extension",
      "Responsive UI built for focused learning experiences",
    ],
    stats: [
      { label: "Questions Authored", value: "200+" },
      { label: "Resource Types", value: "PDF, Video" },
      { label: "Search Latency", value: "<100ms" },
    ],
    github: "https://github.com/gdurgaprasad03",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    icon: Globe,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-0 md:py-6 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-12 animate-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 animate-pulse" />
            FEATURED WORKS
          </div>
          <h2 className="text-3xl md:text-6xl font-black font-heading mb-4 text-gray-900 tracking-tighter leading-tight md:leading-none">Projects I've Built.</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-medium">
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
                  <div className="absolute top-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-premium border border-white/20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <project.icon className="w-6 h-6 text-gray-900" />
                  </div>

                  {/* High-End Metrics Card */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-wrap lg:flex-nowrap gap-2 md:gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex-1 min-w-[80px] p-3 md:p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl md:rounded-2xl">
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
                  <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 transition-transform group-hover/item:scale-150" />
                      <span className="text-gray-700 text-sm md:text-base font-bold leading-normal">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-1.5 rounded-xl bg-gray-50 text-gray-500 text-[10px] font-black uppercase tracking-wider border border-gray-100 hover:bg-white hover:text-blue-600 hover:border-blue-100 transition-all"
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
                    className="group/link flex items-center gap-2 text-gray-900 text-xs font-black uppercase tracking-widest hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4 transition-transform group-hover/link:-rotate-12" />
                    Source Code
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-gray-900 text-xs font-black uppercase tracking-widest hover:text-blue-600 transition-colors"
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
