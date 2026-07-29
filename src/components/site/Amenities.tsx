import {
  Waves,
  Dumbbell,
  UtensilsCrossed,
  Trees,
  Trophy,
  Baby,
  PartyPopper,
  Footprints,
  Dog,
} from "lucide-react";
import aerial from "@/assets/villages-aerial.jpg.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: Waves, title: "Piscina", text: "Espelho d'água para o descanso da família." },
  { icon: Dumbbell, title: "Academia", text: "Equipamentos completos, integrada à natureza." },
  { icon: UtensilsCrossed, title: "Espaço gourmet", text: "Para receber com privacidade e conforto." },
  { icon: Trophy, title: "Quadras", text: "Esporte e lazer ao ar livre para todas as idades." },
  { icon: Baby, title: "Playground", text: "Área lúdica e segura para as crianças." },
  { icon: PartyPopper, title: "Salão de festas", text: "Ambiente reservado para os momentos especiais." },
  { icon: Trees, title: "Área verde", text: "Paisagismo preservado ao redor do condomínio." },
  { icon: Footprints, title: "Trilhas", text: "Caminhos internos para caminhadas tranquilas." },
  { icon: Dog, title: "Pet place", text: "Espaço dedicado para o convívio com os pets." },
];

export function Amenities() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="lazer" ref={ref} className="relative overflow-hidden bg-forest-deep py-24 text-offwhite lg:py-36">
      <img
        src={aerial.url}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-15"
        style={{ objectPosition: "center 30%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-forest-deep/95 to-forest-deep" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
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
            Infraestrutura de lazer completa dentro do condomínio, projetada
            para o convívio da família e para todas as idades.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-offwhite/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className="group flex flex-col gap-4 bg-forest-deep/80 p-8 backdrop-blur-sm transition-colors hover:bg-forest-deep/60"
            >
              <it.icon className="h-6 w-6 text-gold transition-transform group-hover:scale-110" strokeWidth={1.4} />
              <h3 className="font-display text-xl text-offwhite">{it.title}</h3>
              <p className="text-sm leading-relaxed text-offwhite/70">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
