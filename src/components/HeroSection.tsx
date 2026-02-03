import { Code2, Database, MapPin, Sparkles, ArrowRight, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const techPills = [
  { name: "Python" },
  { name: "Django" },
  { name: "REST APIs" },
  { name: "MySQL" },
  { name: "Git" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-white pt-24 pb-0">
      {/* Background Grid Pattern - High Density */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Refined Ambient Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f605,transparent_50%)]" />

      {/* Floating Elements (Visual Decoration) */}
      <div className="absolute right-[10%] top-[25%] p-4 rounded-3xl bg-white shadow-premium border border-gray-100/50 animate-float hidden lg:block">
        <Code2 className="w-8 h-8 text-blue-600" />
      </div>
      <div className="absolute left-[8%] bottom-[30%] p-4 rounded-3xl bg-white shadow-premium border border-gray-100/50 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <Database className="w-8 h-8 text-emerald-600" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Status Badge */}
          <div className="flex justify-center animate-reveal stagger-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/50 text-blue-700 border border-blue-100/50 text-[11px] font-black uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Available for opportunities
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 animate-reveal stagger-2">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-gray-900 leading-[1.1] md:leading-[0.9] tracking-tighter">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Durga Prasad</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-gray-500 tracking-tight">
              Python Developer & Backend Engineer
            </p>
          </div>

          {/* Description */}
          <div className="space-y-6 animate-reveal stagger-3">
            <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
              I build scalable architectures with <span className="text-gray-900 font-bold">Django & Fast API</span>.
              Specializing in secure, high-performance systems.
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hyderabad, India</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-reveal stagger-4">
            <Button size="lg" className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white h-14 px-10 rounded-2xl flex items-center justify-center gap-3 shadow-premium transition-all hover:scale-105 active:scale-95" asChild>
              <a href="#projects">
                <Sparkles className="w-5 h-5" />
                Explore Projects
              </a>
            </Button>
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-14 px-10 rounded-2xl font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 group" asChild>
              <a href="#contact" className="flex items-center gap-2 justify-center">
                Start a Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Tech stack & Scroll hint */}
          <div className="pt-12 space-y-8 animate-reveal" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {techPills.map((pill) => (
                <div 
                  key={pill.name}
                  className="px-4 md:px-5 py-2 rounded-xl bg-gray-50 border border-gray-100 text-gray-500 text-[10px] md:text-[11px] font-black uppercase tracking-wider hover:bg-white hover:text-blue-600 hover:border-blue-200 transition-all cursor-default hover:shadow-soft hover-lift"
                >
                  {pill.name}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 text-gray-300">
              <div className="w-px h-12 bg-gradient-to-b from-gray-200 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
