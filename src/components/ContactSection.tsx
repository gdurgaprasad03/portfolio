import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-primary font-mono text-sm">05. What's Next?</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, a project idea, or just want to say hi, 
            I'll do my best to get back to you!
          </p>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:gdurgaprasad065@gmail.com"
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-subtle"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm break-all">gdurgaprasad065@gmail.com</p>
            </a>

            <div className="p-6 rounded-xl bg-gradient-card border border-border">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+91 9392018593</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-card border border-border">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Hyderabad, Telangana</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-12"
            onClick={() => window.open("mailto:gdurgaprasad065@gmail.com")}
          >
            <Send className="w-5 h-5 mr-2" />
            Say Hello
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
