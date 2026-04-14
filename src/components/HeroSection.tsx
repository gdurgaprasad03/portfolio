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
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-background pt-24 pb-0">
      {/* Background Grid Pattern - Dark Cyber Density */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Refined Ambient Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />

      {/* Floating Elements (Visual Decoration) */}
      <div className="absolute right-[10%] top-[25%] p-4 rounded-3xl bg-card/80 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] border border-white/5 animate-float hidden lg:block">
        <Code2 className="w-8 h-8 text-cyan-400" />
      </div>
      <div className="absolute left-[8%] bottom-[30%] p-4 rounded-3xl bg-card/80 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] border border-white/5 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <Database className="w-8 h-8 text-accent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left Column: Typography & CTAs */}
          <div className="space-y-8 md:space-y-10 text-center lg:text-left">
            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start animate-reveal stagger-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 text-[11px] font-black uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_-3px_rgba(79,70,229,0.2)]">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for opportunities
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 animate-reveal stagger-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-foreground leading-tight md:leading-[1.1] tracking-tighter drop-shadow-sm">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">Durga Prasad</span>
              </h1>
              <p className="text-lg md:text-3xl font-bold text-muted-foreground tracking-tight">
                Backend Engineer & <span className="text-foreground">Python Specialist</span>
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6 animate-reveal stagger-3">
              <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                I architect highly scalable, secure, and robust server-side applications using <span className="text-foreground font-bold drop-shadow-sm">Django & Fast API</span>.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 animate-reveal stagger-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95" asChild>
                <a href="#projects">
                  <Sparkles className="w-5 h-5" />
                  Explore Output
                </a>
              </Button>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-accent to-cyan-500 hover:from-accent/90 hover:to-cyan-400 text-white h-14 px-8 rounded-2xl font-bold shadow-[0_0_30px_-10px_rgba(79,70,229,0.5)] transition-all hover:scale-105 active:scale-95 group" asChild>
                <a href="#contact" className="flex items-center gap-2 justify-center">
                  Start a Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Tech stack */}
            <div className="pt-8 space-y-6 animate-reveal" style={{ animationDelay: '0.6s' }}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {techPills.map((pill) => (
                  <div 
                    key={pill.name}
                    className="px-4 py-2 rounded-xl bg-card border border-border text-muted-foreground text-[10px] md:text-[11px] font-black uppercase tracking-wider hover:bg-white/5 hover:text-accent hover:border-accent/40 transition-all cursor-default shadow-sm hover:shadow-[0_0_20px_-5px_rgba(79,70,229,0.2)] hover-lift"
                  >
                    {pill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code Editor Visual */}
          <div className="hidden lg:block animate-reveal stagger-3 relative group">
            {/* Ambient Backlight for IDE */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-cyan-400 rounded-3xl blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />

            <div className="relative rounded-3xl bg-[#0d1117] border border-white/10 shadow-[0_0_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transform transition-transform duration-700 hover:scale-[1.02]">
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="mx-auto text-[11px] font-mono text-gray-500 font-medium tracking-wider select-none">
                  durga_prasad.py
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-[13px] leading-loose">
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  <span className="text-purple-400 font-bold">class</span> <span className="text-yellow-300 font-bold">DurgaPrasad</span>(<span className="text-blue-400 font-medium">SoftwareEngineer</span>):
                </div>
                <div className="pl-6 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <span className="text-purple-400 font-bold">def</span> <span className="text-blue-300 font-bold">__init__</span>(<span className="text-orange-300">self</span>):
                </div>
                <div className="pl-12 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <span className="text-orange-300">self</span>.name <span className="text-pink-400">=</span> <span className="text-green-400">"G. Durga Prasad"</span>
                  <br/>
                  <span className="text-orange-300">self</span>.role <span className="text-pink-400">=</span> <span className="text-green-400">"Python Developer"</span>
                  <br/>
                  <span className="text-orange-300">self</span>.focus <span className="text-pink-400">=</span> [<span className="text-green-400">"Backend"</span>, <span className="text-green-400">"System Architecture"</span>]
                </div>
                <div className="pl-6 mt-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <span className="text-purple-400 font-bold">def</span> <span className="text-blue-300 font-bold">build_api</span>(<span className="text-orange-300">self</span>):
                </div>
                <div className="pl-12 text-gray-400 group-hover:text-gray-300 transition-colors tracking-wide">
                  <span className="text-purple-400 font-bold">return</span> <span className="text-green-400">"Highly Performant REST & GraphQL APIs built with Django."</span>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">visitor@portfolio:~$</span>
                  <span className="w-2.5 h-4 bg-gray-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
