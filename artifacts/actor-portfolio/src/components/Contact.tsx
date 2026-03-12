import { motion } from "framer-motion";
import { Mail, Instagram, MapPin, Download } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 w-full border-t border-border/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Contact" subtitle="Get in touch" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16">
          <motion.a
            href="mailto:contact@aishwaryapriyaprasad.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center p-12 bg-card border border-border/50 rounded-sm hover:border-accent/50 hover:bg-card/80 transition-all duration-300 group"
          >
            <Mail className="w-8 h-8 text-muted-foreground group-hover:text-accent mb-6 transition-colors duration-300" />
            <h4 className="font-display tracking-widest uppercase text-sm mb-2">Direct</h4>
            <p className="text-muted-foreground text-sm text-center">contact@<br/>aishwaryapriyaprasad.com</p>
          </motion.a>

          <motion.a
            href="mailto:management@talent-agency.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center p-12 bg-card border border-border/50 rounded-sm hover:border-accent/50 hover:bg-card/80 transition-all duration-300 group"
          >
            <MapPin className="w-8 h-8 text-muted-foreground group-hover:text-accent mb-6 transition-colors duration-300" />
            <h4 className="font-display tracking-widest uppercase text-sm mb-2">Management</h4>
            <p className="text-muted-foreground text-sm text-center">management@<br/>talent-agency.com</p>
          </motion.a>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center p-12 bg-card border border-border/50 rounded-sm hover:border-accent/50 hover:bg-card/80 transition-all duration-300 group"
          >
            <Instagram className="w-8 h-8 text-muted-foreground group-hover:text-accent mb-6 transition-colors duration-300" />
            <h4 className="font-display tracking-widest uppercase text-sm mb-2">Social</h4>
            <p className="text-muted-foreground text-sm text-center">@aishwarya.priyaprasad</p>
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <button 
            onClick={() => alert("Downloading resume...")}
            className="group relative px-10 py-5 bg-foreground text-background font-display font-bold tracking-[0.2em] uppercase text-sm overflow-hidden flex items-center gap-4 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow duration-500 rounded-sm"
          >
            <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />
            <span className="relative z-10 flex items-center gap-3">
              Download Resume <Download className="w-4 h-4" />
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
