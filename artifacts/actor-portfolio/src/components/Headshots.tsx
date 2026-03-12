import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const headshots = [
  { id: 1, mood: "Commercial", img: "headshot-1.png" },
  { id: 2, mood: "Dramatic", img: "headshot-2.png" },
  { id: 3, mood: "Natural", img: "headshot-3.png" },
  { id: 4, mood: "Character", img: "headshot-4.png" },
  { id: 5, mood: "Editorial", img: "headshot-5.png" },
  { id: 6, mood: "Theatrical", img: "headshot-6.png" },
];

export function Headshots() {
  const trackRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollBy = useCallback((dir: number) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".carousel-card") as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 16 : 280;
    trackRef.current.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    autoRef.current = setInterval(() => {
      if (!trackRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 4) {
        trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollBy(1);
      }
    }, 3000);
  }, [scrollBy]);

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto]);

  return (
    <section id="headshots" className="py-14 w-full border-t border-border/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-display tracking-[0.3em] text-accent uppercase">Gallery</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-[0.08em] text-foreground mt-1">
              Headshots
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { scrollBy(-1); startAuto(); }}
              onMouseEnter={stopAuto}
              onMouseLeave={startAuto}
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => { scrollBy(1); startAuto(); }}
              onMouseEnter={stopAuto}
              onMouseLeave={startAuto}
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width scrollable track */}
      <div
        ref={trackRef}
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
        className="flex gap-4 overflow-x-auto scroll-smooth px-6 md:px-12 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {headshots.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="carousel-card group flex-none flex flex-col gap-2"
            style={{ width: "clamp(220px, 22vw, 300px)" }}
          >
            <div className="relative overflow-hidden bg-card rounded-sm cursor-pointer" style={{ aspectRatio: "3/4" }}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={`${import.meta.env.BASE_URL}images/${item.img}`}
                alt={`${item.mood} headshot`}
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="text-xs font-display tracking-[0.15em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {item.mood}
              </span>
              <span className="text-[10px] text-border group-hover:text-accent transition-colors duration-300">
                0{item.id}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
