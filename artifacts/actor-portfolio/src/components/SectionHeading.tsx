import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-24 flex flex-col ${alignment === "center" ? "items-center text-center" : "items-start text-left"}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-display tracking-[0.3em] text-accent mb-4 block uppercase"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-[0.1em] uppercase text-foreground relative"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className={`h-[1px] bg-border mt-8 w-24 ${alignment === "center" ? "" : "origin-left"}`}
      />
    </div>
  );
}
