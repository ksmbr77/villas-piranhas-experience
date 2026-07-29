import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import h1 from "@/assets/house-1.jpg";
import pool from "@/assets/amenity-pool.jpg";
import nature from "@/assets/amenity-nature.jpg";
import { useReveal } from "@/hooks/use-reveal";

const images = [
  { src: g2, alt: "Vista aérea", h: "row-span-2" },
  { src: h1, alt: "Casa moderna" },
  { src: g1, alt: "Portaria" },
  { src: nature, alt: "Mata preservada", h: "row-span-2" },
  { src: pool, alt: "Piscina" },
  { src: g3, alt: "Família na alameda" },
];

export function Gallery() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="mb-14 max-w-2xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Galeria</span>
          </div>
          <h2 className="display-lg text-graphite">
            Cada ângulo revela
            <br />
            <span className="italic text-forest">uma boa razão</span>.
          </h2>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px] md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
              className={`group overflow-hidden rounded-2xl ${img.h ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
