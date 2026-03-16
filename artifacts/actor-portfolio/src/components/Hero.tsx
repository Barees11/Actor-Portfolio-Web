import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-35 scale-105 animate-slowzoom"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-end h-full px-12 md:px-20 pb-32">

        <div className="max-w-xl text-left">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="leading-none text-white font-hero"
          >

            <span className="block text-6xl md:text-7xl lg:text-8xl tracking-tight font-semibold">
              AISHWARYA
            </span>

            <span className="block text-6xl md:text-7xl lg:text-8xl tracking-tight">
              PRIYAPRASAD
            </span>

          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 flex items-center gap-4"
          >

            <p className="tracking-[0.35em] text-sm text-gray-200">
              ACTOR · CREATOR
            </p>

          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-4 text-gray-300 tracking-widest text-sm"
          >
            MUMBAI, INDIA
          </motion.p>

        </div>

      </div>

    </section>
  );
}