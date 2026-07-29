import entrance from "@/assets/villages-entrance.jpg.asset.json";
import house from "@/assets/villages-house.jpg.asset.json";
import aerial from "@/assets/villages-aerial.jpg.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const images = [
  { src: aerial.url, alt: "Vista aérea do Villages Piranhas", h: "row-span-2" },
  { src: house.url, alt: "Casa com piscina privativa" },
  { src: entrance.url, alt: "Portaria Villages Piranhas" },
  { src: house.url, alt: "Área externa da casa mobiliada", h: "row-span-2" },
  { src: aerial.url, alt: "Ruas do condomínio" },
  { src: entrance.url, alt: "Entrada do condomínio" },
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
            Registros reais do
            <br />
            <span className="italic text-forest">Villages Piranhas</span>.
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
              <img decoding="async"
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
