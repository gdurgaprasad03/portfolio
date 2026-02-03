import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          {/* Brand and Description */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-900 font-black text-xl italic">
                GP
              </div> */}
              <h3 className="text-xl font-black tracking-tighter uppercase tracking-[0.1em]">G. Durga Prasad</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              Architecting scalable backend solutions with Python & Django. 
              Committed to engineering excellence and robust digital experiences.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col space-y-6">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">RESOURCES</span>
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Biography</a>
              <a href="#projects" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Case Studies</a>
              <a href="#experience" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Professional History</a>
            </div>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end space-y-6">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">SOCIAL MEDIA</span>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/gdurgaprasad03" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/g-durga-prasad-a65b3a25b" },
                { icon: Mail, href: "mailto:gdurgaprasad065@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 hover-lift transition-all border border-white/5"
                >
                  <social.icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
            © 2026 G. Durga Prasad • All Rights Reserved
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all border border-white/5 group"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            Terminal Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
