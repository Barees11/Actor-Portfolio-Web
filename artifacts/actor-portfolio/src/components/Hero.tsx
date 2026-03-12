import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-screen background image */}
      <img
        src={`${import.meta.env.BASE_URL}images/hero.png`}
        alt="Aishwarya Priyaprasad"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 px-8 md:px-16 lg:px-20 z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xs font-display tracking-[0.35em] text-yellow-400/80 uppercase mb-4"
        >
          Mumbai, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tight leading-[0.88] text-white"
        >
          Aishwarya
          <br />
          <span className="opacity-90">Priyaprasad</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex items-center gap-4 mt-6"
        >
          <div className="w-10 h-[1px] bg-yellow-400/70" />
          <p className="text-sm md:text-base text-white/70 font-light tracking-[0.25em] uppercase">
            Actor · Creator
          </p>
        </motion.div>

        <motion.a
          href="#showreel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 inline-flex items-center gap-4 text-xs font-display tracking-[0.2em] uppercase text-white/60 hover:text-yellow-400 transition-colors duration-300 w-fit"
        >
          <span className="w-10 h-[1px] bg-current" />
          Watch Showreel
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 right-10 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-white/60"
          />
        </div>
        <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase rotate-90 origin-center mt-2">Scroll</span>
      </motion.div>
    </section>
  );
}
