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
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-100/50 py-3 shadow-soft"
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
              <span className="text-sm font-black tracking-tighter text-gray-900 leading-none">
                DURGA PRASAD
              </span>
              <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 tracking-[0.2em] leading-none mt-0.5 whitespace-nowrap uppercase">
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
                  className="relative text-[11px] font-extrabold uppercase tracking-[0.15em] text-gray-500 hover:text-gray-900 transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 ml-4 pl-6 border-l border-gray-100">
              <a
                href="https://github.com/gdurgaprasad03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/g-durga-prasad-a65b3a25b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* ✅ FIXED: HIRE ME BUTTON */}
              <Button
                size="sm"
                className="bg-gray-900 hover:bg-black text-white px-5 h-10 rounded-xl flex items-center gap-2.5 shadow-premium transition-all hover:scale-105 active:scale-95"
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
            className="md:hidden p-2 text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-100 animate-reveal">
          <div className="container mx-auto px-6 py-10 flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  scrollToSection(link.href);
                }}
                className="text-2xl font-black text-gray-900 hover:text-emerald-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <a
                href="https://github.com/gdurgaprasad03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/g-durga-prasad-a65b3a25b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              {/* Mobile CONTACT ME still uses scrollToSection */}
              <Button
                className="flex-1 h-12 bg-gray-900 text-white rounded-2xl font-bold"
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection("#contact");
                }}
              >
                CONTACT ME
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
