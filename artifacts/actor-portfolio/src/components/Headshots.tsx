import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const headshots = [
  { id: 1, mood: "Commercial", img: "headshot-1.png" },
  { id: 2, mood: "Dramatic", img: "headshot-2.png" },
  { id: 3, mood: "Natural", img: "headshot-3.png" },
  { id: 4, mood: "Character", img: "headshot-4.png" },
  { id: 5, mood: "Editorial", img: "headshot-5.png" },
  { id: 6, mood: "Theatrical", img: "headshot-6.png" },
];

export function Headshots() {
  return (
    <section id="headshots" className="py-24 md:py-32 w-full border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Headshots" subtitle="Gallery" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {headshots.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col gap-4"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-card rounded-sm cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={`${import.meta.env.BASE_URL}images/${item.img}`} 
                  alt={`${item.mood} headshot`}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[30%] group-hover:grayscale-0"
                />
              </div>
              <div className="flex justify-between items-center px-1">
                <span className="text-xs font-display tracking-[0.15em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {item.mood}
                </span>
                <span className="text-[10px] text-border group-hover:text-accent transition-colors duration-300">
                  {`0${item.id}`}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
