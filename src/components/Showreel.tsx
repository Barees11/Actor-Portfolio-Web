import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { useState, useRef } from "react";

const reels: string[] = [
  "/videos/sample.mp4",
  "/videos/TRAILER.mp4",
  "/videos/hero.mp4",
  "/videos/sample.mp4"
];

export function Showreel() {

  const [active, setActive] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const nextReel = () => {
    setActive((prev) => (prev + 1) % reels.length);
    setPlaying(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="videos" className="py-32 w-full border-t border-border/20 bg-black">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Title (same style as Gallery) */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-hero text-white tracking-wide mb-14"
        >
          VIDEOS
        </motion.h2>


        {/* Main Video */}

        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-14"
        >

          <div className="relative w-full aspect-video bg-black overflow-hidden rounded-sm shadow-2xl">

            <video
              ref={videoRef}
              src={reels[active]}
              controls
              playsInline
              className="w-full h-full object-contain cursor-pointer"
              onClick={togglePlayPause}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />

            {/* Play Overlay */}

            {!playing && (
              <div
                onClick={togglePlayPause}
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/20
                  backdrop-blur-[1px]
                  transition-opacity
                  duration-500
                  cursor-pointer
                "
              >

                <div
                  className="
                    w-24
                    h-24
                    rounded-full
                    border
                    border-white/40
                    flex
                    items-center
                    justify-center
                    bg-black/40
                    hover:scale-110
                    transition
                    duration-300
                  "
                >
                  <Play size={40} fill="white" className="ml-1" />
                </div>

              </div>
            )}

            {/* Next Video Button */}

            <button
              onClick={nextReel}
              className="
                absolute
                right-6
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                border
                border-white/30
                flex
                items-center
                justify-center
                backdrop-blur
                hover:border-white
                transition
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </motion.div>


        {/* Video Preview Strip */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {reels.slice(0, 3).map((video, i) => (

            <div
              key={i}
              onClick={() => setActive(i)}
              className="group cursor-pointer"
            >

              <div className="relative aspect-video overflow-hidden rounded-sm border border-border/30">

                <video
                  src={video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="
                    w-full
                    h-full
                    object-cover
                    opacity-80
                    group-hover:opacity-100
                    transition
                    duration-300
                  "
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}