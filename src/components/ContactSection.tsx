import { Mail, MapPin, Phone, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-0 md:py-6 bg-[#fafafa] relative overflow-hidden">
      {/* High-End Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#3b82f605,transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/50 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-6xl font-black font-heading text-gray-900 tracking-tighter leading-tight md:leading-none mb-6">Let's Build Together.</h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Open for interesting projects, scalable architectures, and collaborative opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left Column: Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <a 
                href="mailto:gdurgaprasad065@gmail.com"
                className="group flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-gray-100 shadow-soft hover:shadow-premium transition-all duration-500 hover-lift animate-reveal"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50/50 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Email</p>
                  <p className="text-[15px] md:text-lg font-black text-gray-900 truncate tracking-tight">gdurgaprasad065@gmail.com</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 transition-colors" />
              </a>

              <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-gray-100 shadow-soft animate-reveal stagger-1">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50/50 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Contact Number</p>
                  <p className="text-[15px] md:text-lg font-black text-gray-900 tracking-tight">+91 9392018593</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-gray-100 shadow-soft animate-reveal stagger-2">
                <div className="w-16 h-16 rounded-2xl bg-purple-50/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-[15px] md:text-lg font-black text-gray-900 tracking-tight">Hyderabad, Telangana</p>
                </div>
              </div>

              <div className="pt-6 animate-reveal stagger-3">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 px-4">Professional Networks</p>
                <div className="flex flex-wrap gap-4 px-2">
                  <Button 
                    className="bg-gray-900 hover:bg-black text-white h-14 px-10 rounded-2xl flex items-center gap-2 shadow-premium hover-lift transition-all"
                    onClick={() => window.open("https://github.com/gdurgaprasad03")}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
                  </Button>
                  <Button 
                    className="bg-[#0077b5] hover:bg-[#00669c] text-white h-14 px-10 rounded-2xl flex items-center gap-2 shadow-premium hover-lift transition-all"
                    onClick={() => window.open("https://www.linkedin.com/in/g-durga-prasad-a65b3a25b")}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Form */}
            <div className="lg:col-span-7 animate-reveal stagger-1">
              <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-gray-100 shadow-premium">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. John Doe"
                        className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-200 text-gray-900 font-bold transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Expertise Needed</label>
                      <input 
                        type="email" 
                        placeholder="email@example.com"
                        className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-200 text-gray-900 font-bold transition-all outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Project Inquiry"
                      className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-200 text-gray-900 font-bold transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Detailed Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Briefly describe your project or requirements..."
                      className="w-full p-6 rounded-[2rem] bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-200 text-gray-900 font-bold transition-all outline-none resize-none"
                    />
                  </div>

                  <Button className="w-full h-16 rounded-2xl bg-gray-900 hover:bg-black text-white text-md font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-premium">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
