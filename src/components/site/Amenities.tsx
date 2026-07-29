import pool from "@/assets/amenity-pool.jpg";
import gym from "@/assets/amenity-gym.jpg";
import gourmet from "@/assets/amenity-gourmet.jpg";
import nature from "@/assets/amenity-nature.jpg";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { title: "Piscina panorâmica", img: pool, span: "md:col-span-2 md:row-span-2" },
  { title: "Espaço gourmet", img: gourmet, span: "" },
  { title: "Academia com vista", img: gym, span: "" },
  { title: "Trilhas e mata preservada", img: nature, span: "md:col-span-2" },
];

const list = ["Piscina", "Academia", "Espaço Gourmet", "Quadras", "Playground", "Salão de festas", "Área verde", "Trilhas", "Pet Place"];

export function Amenities() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="lazer" ref={ref} className="relative bg-forest-deep py-24 text-offwhite lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div data-reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow-light">Área de lazer</span>
            </div>
            <h2 className="display-lg text-offwhite">
              Cada dia como
              <br />
              <span className="italic text-gold-soft">uma pequena viagem</span>.
            </h2>
          </div>
          <p data-reveal className="max-w-md text-sm leading-relaxed text-offwhite/70">
            Uma infraestrutura de lazer digna dos melhores resorts, integrada à
            natureza e projetada para todas as idades da família.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[240px]">
          {items.map((it, i) => (
            <div
              key={it.title}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl text-offwhite">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-14 flex flex-wrap gap-2">
          {list.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-offwhite/20 bg-offwhite/5 px-4 py-2 text-[12px] tracking-wide text-offwhite/85 backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
