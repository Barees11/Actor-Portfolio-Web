import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden pt-20">
      
      {/* Background abstract glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10 gap-12 md:gap-0">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 flex flex-col items-start pt-12 md:pt-0"
        >
          <div className="overflow-hidden mb-2">
            <motion.h2 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-xs md:text-sm font-display tracking-[0.3em] text-accent mb-4"
            >
              Mumbai, India
            </motion.h2>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-[0.9] text-foreground mb-6">
            Aishwarya
            <br />
            <span className="text-stroke block mt-2">Priyaprasad</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-[0.2em] uppercase max-w-md mt-4 border-l-2 border-accent pl-6">
            Actor &middot; Creator
          </p>

          <motion.a
            href="#showreel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 group flex items-center gap-4 text-xs font-display tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-300"
          >
            <span className="w-12 h-[1px] bg-border group-hover:bg-accent transition-colors duration-300"></span>
            Watch Showreel
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-[3/4] overflow-hidden rounded-sm group">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
            <img 
              src={`${import.meta.env.BASE_URL}images/hero.png`} 
              alt="Aishwarya Priyaprasad" 
              className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
