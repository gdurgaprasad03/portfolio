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
    <section id="experience" className="py-0 md:py-6 bg-[#fafafa] relative overflow-hidden">
      {/* High-End Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_0%,#0f172a03,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
              CAREER JOURNEY
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-gray-900 tracking-tighter leading-none mb-4">Experience & Education.</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Professional Experience Column */}
            <div className="lg:col-span-7 space-y-8 animate-reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-slate-900 text-white">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-gray-900 tracking-tight uppercase tracking-widest leading-none">Professional History</h3>
              </div>

              <div className="relative pl-8 md:pl-10 border-l-2 border-slate-100 space-y-8 ml-4 md:ml-0">
                {workExperience.map((exp, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[51px] top-0 p-2 md:p-2.5 rounded-full bg-white border-2 border-slate-100 text-slate-400 z-10 transition-all group-hover:border-slate-900 group-hover:text-slate-900 group-hover:scale-110 group-hover:shadow-soft">
                      {index === 0 ? <Briefcase className="w-3.5 md:w-4 h-3.5 md:h-4" /> : <ChevronRight className="w-3.5 md:w-4 h-3.5 md:h-4" />}
                    </div>

                    <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border border-gray-100 shadow-soft hover:shadow-premium transition-all duration-500 hover-lift">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        {exp.current && (
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5 border border-emerald-100/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            ACTIVE ROLE
                          </span>
                        )}
                      </div>

                      <h4 className="text-2xl font-black text-gray-900 mb-1 tracking-tighter">{exp.title}</h4>
                      <p className="text-base font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">{exp.company}</p>

                      <div className="flex flex-wrap gap-4 text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-6">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      <ul className="space-y-4">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-4 group/item">
                            <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 transition-transform group-hover/item:translate-x-1" />
                            <span className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">{point}</span>
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
                <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-gray-900 tracking-tight uppercase tracking-widest leading-none">Academic Background</h3>
              </div>

              <div className="relative pl-8 md:pl-10 border-l-2 border-slate-100 space-y-6 ml-4 md:ml-0">
                {education.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[51px] top-0 p-2 md:p-2.5 rounded-full bg-white border-2 border-slate-100 text-slate-400 z-10 transition-all group-hover:border-indigo-600 group-hover:text-indigo-600 group-hover:scale-110">
                      <GraduationCap className="w-3.5 md:w-4 h-3.5 md:h-4" />
                    </div>

                    <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border border-gray-100 shadow-soft hover:shadow-premium transition-all duration-500 hover-lift">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-black text-gray-900 leading-none tracking-tighter pr-4">
                          {item.degree}
                        </h4>
                        <span className="px-3 py-1 bg-emerald-50/50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100/50 shrink-0">
                          {item.degree === "SSC" ? `CGPA: ${item.grade}` : `${item.grade} GPA`}
                        </span>
                      </div>
                      
                      <p className="text-sm font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">{item.institution}</p>
                      
                      <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold uppercase tracking-widest">
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
