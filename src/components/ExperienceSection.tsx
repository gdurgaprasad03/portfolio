import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from "lucide-react";

const workExperience = [
  {
    title: "Python Developer Intern",
    company: "Sria Infotech Pvt Ltd",
    location: "Hyderabad",
    period: "May 2025 – Present",
    current: true,
    points: [
      "Developing backend modules using Python, Django, and MySQL for enterprise applications",
      "Building and integrating RESTful APIs to support frontend and mobile clients",
      "Writing unit tests, debugging backend issues, and improving API performance",
      "Working with Git, Postman, and VS Code for version control and API testing",
      "Collaborating with senior developers to implement new features and optimize code",
    ],
  },
  {
    title: "Java Full Stack Trainee",
    company: "Codegnan Destination",
    location: "India",
    period: "Training Program",
    current: false,
    points: [
      "Gained strong understanding of SQL and wrote optimized queries in MySQL",
      "Built hands-on expertise in Core Java, OOP concepts, HTML, CSS, JavaScript",
      "Developed multiple mini-projects demonstrating frontend-backend integration",
      "Practiced MVC and servlet-based architecture for Java applications",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Aurora's PG College, Hyderabad",
    period: "Nov 2022 – Aug 2024",
    grade: "7.7",
  },
  {
    degree: "Bachelor of Science (BSc)",
    institution: "Pragathi Degree College, Hyderabad",
    period: "Jul 2019 – Sep 2022",
    grade: "8.65",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "C.V. Raman Junior College, Wanaparthy",
    period: "Jun 2017 – Apr 2019",
    grade: "8.86",
  },
  {
    degree: "SSC",
    institution: "Wisdom High School, Brahmanakotkur",
    period: "Jun 2016 – May 2017",
    grade: "9.0",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-0 md:py-6 bg-background relative overflow-hidden">
      {/* High-End Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_0%,rgba(79,70,229,0.05),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-[0_0_15px_-3px_rgba(79,70,229,0.2)]">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-cyan-400 animate-pulse" />
              CAREER JOURNEY
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-foreground drop-shadow-md tracking-tighter leading-none mb-4">Experience & Education.</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Professional Experience Column */}
            <div className="lg:col-span-7 space-y-8 animate-reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-card border border-border text-accent shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-foreground drop-shadow-sm tracking-tight uppercase tracking-widest leading-none">Professional History</h3>
              </div>

              <div className="relative pl-6 md:pl-10 border-l border-border/50 space-y-8 ml-2 md:ml-0">
                {workExperience.map((exp, index) => (
                   <div key={index} className="relative group">
                     {/* Timeline Dot */}
                     <div className="absolute -left-[35px] md:-left-[51px] top-0 p-2 md:p-2.5 rounded-full bg-card border border-border text-muted-foreground z-10 transition-all group-hover:border-accent group-hover:text-accent group-hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]">
                       {index === 0 ? <Briefcase className="w-3.5 md:w-4 h-3.5 md:h-4" /> : <ChevronRight className="w-3.5 md:w-4 h-3.5 md:h-4" />}
                     </div>

                     <div className="p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-card border border-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.2)] hover:border-accent/40 transition-all duration-500 hover-lift">
                       <div className="flex flex-wrap items-center gap-3 mb-4">
                         {exp.current && (
                           <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5 border border-emerald-500/20 shadow-[0_0_10px_-2px_rgba(16,185,129,0.2)]">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                             ACTIVE ROLE
                           </span>
                         )}
                       </div>

                       <h4 className="text-xl md:text-2xl font-black text-foreground drop-shadow-sm mb-1 tracking-tighter">{exp.title}</h4>
                       <p className="text-sm md:text-base font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400 drop-shadow-sm">{exp.company}</p>

                       <div className="flex flex-wrap gap-4 text-[10px] md:text-[11px] text-muted-foreground font-bold uppercase tracking-widest mb-6">
                         <div className="flex items-center gap-1.5">
                           <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                           {exp.period}
                         </div>
                         <div className="flex items-center gap-1.5">
                           <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                           {exp.location}
                         </div>
                       </div>

                       <ul className="space-y-3 md:space-y-4">
                         {exp.points.map((point, i) => (
                           <li key={i} className="flex items-start gap-3 md:gap-4 group/item">
                             <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 shrink-0 mt-0.5 transition-transform group-hover/item:translate-x-1" />
                             <span className="text-muted-foreground text-xs md:text-base font-medium leading-relaxed">{point}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="lg:col-span-5 space-y-8 animate-reveal stagger-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-card border border-border text-cyan-400 shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-foreground drop-shadow-sm tracking-tight uppercase tracking-widest leading-none">Academic Background</h3>
              </div>

              <div className="relative pl-6 md:pl-10 border-l border-border/50 space-y-6 ml-2 md:ml-0">
                {education.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[35px] md:-left-[51px] top-0 p-2 md:p-2.5 rounded-full bg-card border border-border text-muted-foreground z-10 transition-all group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                      <GraduationCap className="w-3.5 md:w-4 h-3.5 md:h-4" />
                    </div>

                    <div className="p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-card border border-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:border-cyan-400/40 transition-all duration-500 hover-lift">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-black text-foreground drop-shadow-sm leading-none tracking-tighter pr-4">
                          {item.degree}
                        </h4>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest rounded-full border border-accent/30 shadow-[0_0_10px_-2px_rgba(79,70,229,0.2)] shrink-0">
                          {item.degree === "SSC" ? `CGPA: ${item.grade}` : `${item.grade} GPA`}
                        </span>
                      </div>
                      
                      <p className="text-sm font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">{item.institution}</p>
                      
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-bold uppercase tracking-widest">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
