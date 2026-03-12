import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Showreel() {
  return (
    <section id="showreel" className="py-24 md:py-32 w-full bg-card/30 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Showreel" subtitle="Featured Work" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {/* Main Video Placeholder */}
          <div className="relative aspect-video w-full bg-card rounded-sm overflow-hidden group cursor-pointer border border-border/50 shadow-2xl shadow-black/50">
            <img 
              src={`${import.meta.env.BASE_URL}images/showreel-poster.png`} 
              alt="Showreel Cover" 
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-500 shadow-xl">
                <Play className="w-8 h-8 md:w-10 md:h-10 ml-2" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
              <h3 className="font-display text-xl md:text-3xl font-bold uppercase tracking-widest text-white drop-shadow-lg">
                Acting Reel 2024
              </h3>
              <p className="text-sm font-light text-white/80 mt-2 tracking-widest uppercase">3 Mins &middot; Cinematic</p>
            </div>
          </div>

          {/* Sub Clips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
            {["Dramatic Monologue", "Commercial Work", "Theatre Performance"].map((title, i) => (
              <div key={title} className="group cursor-pointer">
                <div className="relative aspect-video bg-card border border-border/50 overflow-hidden mb-4 rounded-sm">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="w-full h-full bg-background/50 flex items-center justify-center group-hover:bg-background/20 transition-colors duration-500">
                    <Play className="w-8 h-8 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h4 className="text-sm font-display tracking-[0.1em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {title}
                </h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
