import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-40 w-full border-t border-border/30 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start gap-16 lg:gap-32 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/3 lg:sticky lg:top-32"
        >
          <span className="text-xs font-display tracking-[0.3em] text-accent mb-4 block uppercase">Biography</span>
          <h2 className="text-5xl lg:text-7xl font-display font-bold uppercase tracking-tight text-foreground leading-none">
            About<br />Aishwarya
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:w-2/3 prose prose-invert prose-lg md:prose-xl max-w-none text-muted-foreground font-light leading-relaxed"
        >
          <p className="first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left">
            Aishwarya Priyaprasad is an acclaimed actor and creator based in Mumbai, India. Known for her deeply nuanced performances and commanding screen presence, she bridges the gap between raw naturalism and highly stylized theatrical technique.
          </p>
          <p>
            With training spanning classical theatre, contemporary dance, and intensive method acting, her work is characterized by physical precision and emotional volatility. She has collaborated with emerging visionary directors in the independent film space while simultaneously leading major brand campaigns across digital platforms.
          </p>
          <p>
            Her artistic philosophy is rooted in finding the profound within the mundane, striving to create characters that resonate with unsettling authenticity. When not on set, Aishwarya continues to train in Bharatanatyam and writes experimental short narratives.
          </p>
          
          <div className="mt-12 flex items-center gap-6 pt-12 border-t border-border/50">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">6+</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years Active</span>
            </div>
            <div className="w-[1px] h-12 bg-border"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">14</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Projects</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
