import { Briefcase, GraduationCap, Heart, Target, Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const infoCards = [
  {
    title: "CURRENT ROLE",
    value: "Python Developer Intern",
    subValue: "Sria Infotech Pvt Ltd",
    icon: Briefcase,
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "EDUCATION",
    value: "MCA Graduate",
    subValue: "Aurora's PG College",
    icon: GraduationCap,
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    title: "FOCUS",
    value: "Backend Systems",
    subValue: "Django & REST APIs",
    icon: Target,
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "PASSION",
    value: "Clean Code",
    subValue: "Scalable Solutions",
    icon: Heart,
    iconColor: "text-rose-400",
    bgColor: "bg-rose-400/10",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-0 md:py-10 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="space-y-6 animate-reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_15px_-3px_rgba(79,70,229,0.2)]">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-cyan-400 animate-pulse" />
                PROFESSIONAL BIO
              </div>

              <h2 className="text-4xl md:text-6xl font-black font-heading leading-none text-foreground drop-shadow-md tracking-tighter">
                Architecting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400 drop-shadow-md">
                  Robust
                </span>{" "}
                Backend Systems.
              </h2>

              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed font-medium">
                <p>
                  I'm a Python Developer based in Hyderabad, specializing in the design and implementation of
                  enterprise-grade architectures. My focus lies at the intersection of performance and scalability.
                </p>
                <p>
                  At Sria Infotech, I engineer scalable APIs and manage complex database operations using
                  <span className="text-foreground font-bold drop-shadow-sm"> Django & REST frameworks</span>. I believe in clean code
                  as a foundation for long-term project success.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                
                <Button
  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 rounded-2xl flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95"
  onClick={() => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}resume.pdf`; // ← PROPER FIX
    link.download = "G_Durga_Prasad_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <Download className="w-4 h-4" />
  <span className="text-xs font-bold uppercase tracking-wider">Download CV</span>
</Button>


                <Button
                  variant="outline"
                  className="border-border hover:border-accent text-foreground px-8 h-12 rounded-2xl flex items-center gap-2 shadow-sm transition-all hover:bg-card hover:text-accent active:scale-95 bg-transparent"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/g-durga-prasad-a65b3a25b")
                  }
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">LinkedIn</span>
                </Button>
              </div>
            </div>

            {/* Right Column: Grid of Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8 lg:pt-0">
              {infoCards.map((card, idx) => (
                <div
                  key={card.title}
                  className={`p-6 rounded-[2rem] bg-card border border-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:border-accent/50 hover-lift animate-reveal stagger-${
                    (idx % 4) + 1
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${card.bgColor} flex items-center justify-center mb-5`}
                  >
                    <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase">
                      {card.title}
                    </p>
                    <h3 className="text-lg font-extrabold text-foreground drop-shadow-sm leading-tight">
                      {card.value}
                    </h3>
                    <p className="text-xs font-bold text-muted-foreground">
                      {card.subValue}
                    </p>
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

export default AboutSection;
