import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const API_URL = "http://127.0.0.1:8000/api/contact/";

const ContactSection = () => {
  const [form, setForm] = useState({
    fullName: "",
    expertise: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit the form");
      }

      setStatus({
        loading: false,
        success:
          "Thank you for reaching out. Your message has been successfully submitted. I will review your inquiry and respond at the earliest possible time.",
        error: "",
      });

      setForm({
        fullName: "",
        expertise: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-0 md:py-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          <div className="text-center mb-16 animate-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-[0_0_15px_-3px_rgba(79,70,229,0.2)]">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-6xl font-black font-heading text-foreground drop-shadow-md tracking-tighter leading-tight md:leading-none mb-6">
              Let's Build Together.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Open for interesting projects, scalable architectures, and collaborative opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-5 space-y-4">
              <a
                href="mailto:gdurgaprasad065@gmail.com"
                className="group flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-card border border-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.2)] hover:border-accent/40 transition-all duration-500 hover-lift animate-reveal"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
                    Email
                  </p>
                  <p className="text-[15px] md:text-lg font-black text-foreground drop-shadow-sm truncate tracking-tight">
                    gdurgaprasad065@gmail.com
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>

              <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-card border border-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] animate-reveal stagger-1">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
                    Contact Number
                  </p>
                  <p className="text-[15px] md:text-lg font-black text-foreground drop-shadow-sm tracking-tight">
                    +91 9392018593
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-card border border-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] animate-reveal stagger-2">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
                    Location
                  </p>
                  <p className="text-[15px] md:text-lg font-black text-foreground drop-shadow-sm tracking-tight">
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>

              <div className="pt-6 animate-reveal stagger-3">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-6 px-4">
                  Professional Networks
                </p>
                <div className="flex flex-wrap gap-4 px-2">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 rounded-2xl flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
                    onClick={() => window.open("https://github.com/gdurgaprasad03")}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
                  </Button>

                  <Button
                    className="bg-[#0077b5] hover:bg-[#00669c] text-white h-14 px-10 rounded-2xl flex items-center gap-2 shadow-[0_4px_20px_rgba(0,119,181,0.3)] hover:shadow-[0_0_20px_rgba(0,119,181,0.6)] hover-lift transition-all"
                    onClick={() => window.open("https://www.linkedin.com/in/g-durga-prasad-a65b3a25b")}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div className="lg:col-span-7 animate-reveal stagger-1">
              <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-card border border-border shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                        Full Name
                      </label>
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        type="text"
                        placeholder="e.g. John Doe"
                        required
                        className="w-full h-14 px-6 rounded-2xl bg-background border border-border focus:bg-background/80 focus:ring-2 focus:ring-accent/20 focus:border-accent text-foreground font-bold transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                        Expertise Needed
                      </label>
                      <input
                        name="expertise"
                        value={form.expertise}
                        onChange={handleChange}
                        type="text"
                        placeholder="e.g. Backend APIs, React, Cloud"
                        required
                        className="w-full h-14 px-6 rounded-2xl bg-background border border-border focus:bg-background/80 focus:ring-2 focus:ring-accent/20 focus:border-accent text-foreground font-bold transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      type="text"
                      placeholder="Project Inquiry"
                      required
                      className="w-full h-14 px-6 rounded-2xl bg-background border border-border focus:bg-background/80 focus:ring-2 focus:ring-accent/20 focus:border-accent text-foreground font-bold transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                      Detailed Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe your project or requirements..."
                      required
                      className="w-full p-6 rounded-[2rem] bg-background border border-border focus:bg-background/80 focus:ring-2 focus:ring-accent/20 focus:border-accent text-foreground font-bold transition-all outline-none resize-none"
                    />
                  </div>

                  {status.error && (
                    <p className="text-red-600 text-sm font-medium">{status.error}</p>
                  )}

                  {status.success && (
                    <p className="text-green-700 text-sm font-medium">{status.success}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={status.loading}
                    className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground text-md font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] active:scale-[0.99] shadow-[0_4px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  >
                    <Send className="w-5 h-5" />
                    {status.loading ? "SENDING..." : "SEND MESSAGE"}
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
