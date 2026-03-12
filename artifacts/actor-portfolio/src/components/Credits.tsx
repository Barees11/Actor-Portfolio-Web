import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const creditsData = {
  film: [
    { title: "The Silent Echo", role: "Lead (Maya)", director: "Vikram Singh", year: "2024" },
    { title: "Midnight Sun", role: "Supporting (Tara)", director: "Anya Kapoor", year: "2023" },
    { title: "Urban Shadows", role: "Lead (Priya)", director: "Rohan Desai", year: "2022" },
  ],
  digital: [
    { title: "Neon Gods", role: "Recurring", director: "StreamPrime Originals", year: "2024" },
    { title: "Lumina Brand Campaign", role: "Face of Campaign", director: "Ogilvy India", year: "2023" },
    { title: "Cityscapes", role: "Guest Star", director: "WebSeries Network", year: "2022" },
  ],
  theatre: [
    { title: "A Doll's House", role: "Nora Helmer", director: "National Theatre Group", year: "2023" },
    { title: "Blood Wedding", role: "Mrs. Linde", director: "Prithvi Theatre", year: "2022" },
  ]
};

const Column = ({ title, items, delay }: { title: string, items: any[], delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="flex flex-col"
  >
    <h3 className="text-xl font-display uppercase tracking-[0.2em] text-foreground border-b border-border/50 pb-4 mb-8">
      {title}
    </h3>
    <div className="flex flex-col gap-8">
      {items.map((item, i) => (
        <div key={i} className="group">
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
              {item.title}
            </h4>
            <span className="text-xs font-mono text-muted-foreground">{item.year}</span>
          </div>
          <p className="text-sm text-muted-foreground mb-1">{item.role}</p>
          <p className="text-xs tracking-wider uppercase text-border/80 group-hover:text-muted-foreground transition-colors duration-300">
            {item.director}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

export function Credits() {
  return (
    <section id="credits" className="py-24 md:py-32 w-full border-t border-border/30 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Credits" subtitle="Selected Experience" alignment="left" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12 mt-16">
          <Column title="Film" items={creditsData.film} delay={0.1} />
          <Column title="Digital" items={creditsData.digital} delay={0.2} />
          <Column title="Theatre" items={creditsData.theatre} delay={0.3} />
        </div>
      </div>
    </section>
  );
}
