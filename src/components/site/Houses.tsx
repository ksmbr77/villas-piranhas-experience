import { BedDouble, Bath, Car, Ruler, ArrowRight } from "lucide-react";
import h1 from "@/assets/house-1.jpg";
import h2 from "@/assets/house-2.jpg";
import h3 from "@/assets/house-3.jpg";
import { useReveal } from "@/hooks/use-reveal";

const houses = [
  {
    img: h1,
    name: "Villa Ipê",
    price: "R$ 1.480.000",
    area: "260 m²",
    lot: "600 m²",
    beds: 4,
    suites: 3,
    garage: 3,
    desc: "Arquitetura contemporânea com pé-direito duplo, piscina privativa e integração total com o jardim.",
  },
  {
    img: h2,
    name: "Villa Aurora",
    price: "R$ 1.190.000",
    area: "220 m²",
    lot: "500 m²",
    beds: 3,
    suites: 2,
    garage: 2,
    desc: "Fachada em pedra natural, espaço gourmet integrado e vista privilegiada para a mata preservada.",
  },
  {
    img: h3,
    name: "Villa Cedro",
    price: "R$ 890.000",
    area: "180 m²",
    lot: "420 m²",
    beds: 3,
    suites: 1,
    garage: 2,
    desc: "Estilo rústico refinado, aconchego familiar e amplo living com vista para o pátio interno.",
  },
];

export function Houses() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="casas" ref={ref} className="relative bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div data-reveal className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Casas disponíveis</span>
            </div>
            <h2 className="display-lg text-graphite">
              Residências únicas.
              <br />
              <span className="italic text-forest">Padrão único.</span>
            </h2>
          </div>
          <p data-reveal className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Casas prontas para morar, com acabamentos de alto padrão e projetos
            arquitetônicos exclusivos. Escolha a que melhor traduz o seu novo capítulo.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {houses.map((h, i) => (
            <article
              key={h.name}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={h.img}
                  alt={h.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1.5 text-[11px] font-medium tracking-wide text-forest backdrop-blur">
                  Pronta para morar
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-graphite">{h.name}</h3>
                  <span className="font-display text-lg text-forest">{h.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>

                <dl className="mt-6 grid grid-cols-4 gap-2 border-y border-border py-4 text-center text-[11px] text-muted-foreground">
                  <div>
                    <Ruler className="mx-auto mb-1 h-4 w-4 text-forest" strokeWidth={1.4} />
                    <dd className="font-medium text-graphite">{h.area}</dd>
                    <dt>Construído</dt>
                  </div>
                  <div>
                    <BedDouble className="mx-auto mb-1 h-4 w-4 text-forest" strokeWidth={1.4} />
                    <dd className="font-medium text-graphite">{h.beds}</dd>
                    <dt>Quartos</dt>
                  </div>
                  <div>
                    <Bath className="mx-auto mb-1 h-4 w-4 text-forest" strokeWidth={1.4} />
                    <dd className="font-medium text-graphite">{h.suites}</dd>
                    <dt>Suítes</dt>
                  </div>
                  <div>
                    <Car className="mx-auto mb-1 h-4 w-4 text-forest" strokeWidth={1.4} />
                    <dd className="font-medium text-graphite">{h.garage}</dd>
                    <dt>Vagas</dt>
                  </div>
                </dl>

                <a
                  href="#contato"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest story-underline"
                >
                  Quero conhecer <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
