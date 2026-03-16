import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const gallery = [
  { id: 1, img: "IMG 1.PNG" },
  { id: 2, img: "IMG 2.JPG" },
  { id: 3, img: "IMG 3.PNG" },
  { id: 4, img: "IMG 4.jpg" },
  { id: 5, img: "IMG 5.jpg" },
  { id: 6, img: "IMG 6.jpg" },
  { id: 7, img: "IMG 7.jpg" },
  { id: 8, img: "IMG 8.jpg" },
  { id: 9, img: "IMG 9.jpg" },
  { id: 10, img: "IMG_10.jpg" },
  { id: 12, img: "IMG 12.jpeg" },
  { id: 13, img: "IMG 13.jpeg" },
];

const infiniteGallery = [...gallery, ...gallery];

export function Headshots() {

  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const [paused, setPaused] = useState(false);

  useEffect(() => {

    const track = trackRef.current;
    if (!track) return;

    const speed = 0.45;

    const animate = () => {

      if (!track) return;

      if (!paused) {
        track.scrollLeft += speed;

        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }

      frameRef.current = requestAnimationFrame(animate);

    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current!);

  }, [paused]);

  return (

    <section
      id="gallery"
      className="py-32 w-full border-t border-border/20 overflow-hidden bg-black"
    >

      {/* Title */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-hero text-white tracking-wide"
        >
          GALLERY
        </motion.h2>

      </div>


      {/* Gallery Strip */}

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-scroll px-6 md:px-12 pb-16"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >

        {infiniteGallery.map((item, index) => (

          <div
            key={index}
            className="gallery-card flex-none"
            style={{ width: "clamp(280px, 25vw, 380px)" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >

            <div
              className="relative rounded-sm overflow-hidden shadow-xl"
              style={{ aspectRatio: "3/4" }}
            >

              <img
                src={`${import.meta.env.BASE_URL}images/${item.img}`}
                className="
                w-full
                h-full
                object-cover
                brightness-95
                transition
                duration-300
                hover:brightness-110
                "
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}