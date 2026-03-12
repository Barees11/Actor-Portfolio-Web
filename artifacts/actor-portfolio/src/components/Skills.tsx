import { motion } from "framer-motion";

const skills = [
  "Hindi (Native)", "English (Fluent)", "Tamil (Fluent)", 
  "Bharatanatyam", "Contemporary Dance", "Classical Singing",
  "Horse Riding", "Yoga & Flexibility", "Stage Combat", 
  "British Accent", "Standard American Accent"
];

export function Skills() {
  return (
    <section className="py-24 w-full bg-card/20 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="text-xs font-display tracking-[0.3em] text-accent mb-8 block uppercase">
          Special Skills
        </span>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent))", color: "hsl(var(--background))", borderColor: "transparent" }}
              className="px-6 py-3 rounded-full border border-border bg-background text-sm tracking-wide text-muted-foreground hover:text-background transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
