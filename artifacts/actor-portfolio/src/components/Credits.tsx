import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const creditsData = [
  {
    category: "Film",
    items: [
      { title: "The Silent Echo", role: "Lead — Maya", director: "Vikram Singh", production: "Phantom Films", year: "2024" },
      { title: "Midnight Sun", role: "Supporting — Tara", director: "Anya Kapoor", production: "Wonderwall Media", year: "2023" },
      { title: "Urban Shadows", role: "Lead — Priya", director: "Rohan Desai", production: "Maddock Films", year: "2022" },
    ],
  },
  {
    category: "Digital",
    items: [
      { title: "Neon Gods", role: "Recurring", director: "StreamPrime Originals", production: "8-Episode Series", year: "2024" },
      { title: "Lumina Brand Campaign", role: "Face of Campaign", director: "Ogilvy India", production: "TVC + Digital", year: "2023" },
      { title: "Cityscapes", role: "Guest Star", director: "WebSeries Network", production: "6-Episode Arc", year: "2022" },
    ],
  },
  {
    category: "Theatre",
    items: [
      { title: "A Doll's House", role: "Nora Helmer", director: "National Theatre Group", production: "Mumbai Tour", year: "2023" },
      { title: "Blood Wedding", role: "The Bride", director: "Prithvi Theatre", production: "Prithvi Theatre", year: "2022" },
    ],
  },
];

function CreditRow({ item }: { item: typeof creditsData[0]["items"][0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/20 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-3 text-left group"
      >
        <div className="flex items-baseline gap-4">
          <span className="text-foreground font-medium group-hover:text-accent transition-colors duration-200">
            {item.title}
          </span>
          <span className="text-xs text-muted-foreground hidden sm:block">{item.role}</span>
        </div>
        <div className="flex items-center gap-4 shrink-0 ml-4">
          <span className="text-xs font-mono text-muted-foreground">{item.year}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-border transition-transform duration-300 ${open ? "rotate-180 text-accent" : ""}`}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-0 flex flex-col sm:flex-row gap-1 sm:gap-6 text-sm text-muted-foreground">
              <span className="sm:hidden">{item.role}</span>
              <span className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-border">Director</span>
                {item.director}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-border">Production</span>
                {item.production}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Credits() {
  return (
    <section id="credits" className="py-14 w-full border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10">
          <span className="text-xs font-display tracking-[0.3em] text-accent uppercase">Selected Experience</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-[0.08em] text-foreground mt-1">
            Credits
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {creditsData.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <h3 className="text-xs font-display tracking-[0.3em] uppercase text-accent mb-3 pb-2 border-b border-border/40">
                {group.category}
              </h3>
              <div>
                {group.items.map((item, i) => (
                  <CreditRow key={i} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
