import { useState, useEffect } from "react";
import { Menu, X, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll with navbar offset
  const scrollToSection = (hash: string) => {
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80; // height of your fixed navbar
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // Update URL without page reload
    window.history.pushState(null, "", hash);
  };

  // 🔥 NEW: bulletproof scroll specifically for "HIRE ME"
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      80; // navbar height

    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.pushState(null, "", "#contact");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo (scroll to top) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="group flex items-center gap-2"
          >
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tighter text-foreground drop-shadow-sm leading-none">
                DURGA PRASAD
              </span>
              <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400 tracking-[0.2em] leading-none mt-0.5 whitespace-nowrap uppercase">
                Python Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="relative text-[11px] font-extrabold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-cyan-400 transition-all duration-300 group-hover:w-full drop-shadow-md" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 ml-4 pl-6 border-l border-border/50">
              <a
                href="https://github.com/gdurgaprasad03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/g-durga-prasad-a65b3a25b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* ✅ FIXED: HIRE ME BUTTON */}
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 h-10 rounded-xl flex items-center gap-2.5 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95"
                onClick={scrollToContact}
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="text-xs font-bold tracking-wider">
                  HIRE ME
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-[60] bg-background/98 backdrop-blur-3xl transition-all duration-500 flex flex-col items-center justify-center ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {/* Close Button Inside Menu */}
        <button
          className="absolute top-6 right-6 p-3 text-foreground hover:bg-muted rounded-2xl transition-all"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col items-center gap-10 text-center px-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                setTimeout(() => scrollToSection(link.href), 500);
              }}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`text-4xl font-black text-foreground hover:text-accent transition-all duration-500 uppercase tracking-tighter ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="flex flex-col gap-6 w-full pt-10 border-t border-border/50">
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/gdurgaprasad03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center text-muted-foreground hover:text-accent transition-all shadow-lg"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/g-durga-prasad-a65b3a25b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center text-muted-foreground hover:text-accent transition-all shadow-lg"
              >
                <Linkedin className="w-7 h-7" />
              </a>
            </div>

            <Button
              size="lg"
              className="w-full h-16 bg-primary text-primary-foreground rounded-2xl font-black tracking-widest text-lg shadow-premium"
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToSection("#contact"), 500);
              }}
            >
              <Mail className="w-6 h-6 mr-2" />
              CONTACT ME
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
