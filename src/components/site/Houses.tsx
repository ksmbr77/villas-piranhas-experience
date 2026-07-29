import { BedDouble, Bath, Car, Ruler, ArrowRight, Sofa, CheckCircle2 } from "lucide-react";
import house from "@/assets/villages-house.jpg.asset.json";
import entrance from "@/assets/villages-entrance.jpg.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  "Totalmente mobiliada e decorada",
  "Piscina privativa com cascata",
  "Fachada em pedra natural e revestimento premium",
  "Área gourmet integrada ao living",
  "Cozinha planejada com eletrodomésticos",
  "Ar-condicionado em todos os ambientes",
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
              <span className="eyebrow">Casas à venda</span>
            </div>
            <h2 className="display-lg text-graphite">
              Casas mobiliadas.
              <br />
              <span className="italic text-forest">Prontas para morar.</span>
            </h2>
          </div>
          <p data-reveal className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Residências de alto padrão totalmente mobiliadas, com projeto arquitetônico
            contemporâneo e acabamentos premium. Chegue com a mala — o resto está pronto.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div data-reveal className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elev)]">
              <img
                src={house.url}
                alt="Casa mobiliada à venda no Villages Piranhas com piscina privativa"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] md:block">
              <img
                src={entrance.url}
                alt="Portaria do Villages Piranhas"
                loading="lazy"
                className="h-40 w-56 object-cover"
              />
            </div>
          </div>

          <article data-reveal className="rounded-3xl bg-card p-8 shadow-[var(--shadow-soft)] lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-forest">
              <Sofa className="h-3.5 w-3.5" /> Entrega mobiliada
            </div>
            <h3 className="mt-5 font-display text-3xl text-graphite lg:text-4xl">
              Casa Villages · Modelo padrão
            </h3>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-display text-4xl text-forest">R$ 550.000</span>
              <span className="text-sm text-muted-foreground">mobiliada</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Arquitetura contemporânea com dois pavimentos, fachada em pedra e revestimento
              natural, piscina privativa e área gourmet. Ambientes integrados e iluminação
              natural em cada espaço.
            </p>

            <dl className="mt-6 grid grid-cols-4 gap-2 border-y border-border py-5 text-center text-[11px] text-muted-foreground">
              <div>
                <Ruler className="mx-auto mb-1 h-4 w-4 text-forest" strokeWidth={1.4} />
                <dd className="font-medium text-graphite">140 m²</dd>
                <dt>Construído</dt>
              </div>
              <div>
                <BedDouble className="mx-auto mb-1 h-4 w-4 text-forest" strokeWidth={1.4} />
                <dd className="font-medium text-graphite">3</dd>
                <dt>Quartos</dt>
              </div>
              <div>
                <Bath className="mx-auto mb-1 h-4 w-4 text-forest" strokeWidth={1.4} />
                <dd className="font-medium text-graphite">2</dd>
                <dt>Suítes</dt>
              </div>
              <div>
                <Car className="mx-auto mb-1 h-4 w-4 text-forest" strokeWidth={1.4} />
                <dd className="font-medium text-graphite">2</dd>
                <dt>Vagas</dt>
              </div>
            </dl>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-graphite/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" strokeWidth={1.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5579999999999?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20comprar%20uma%20casa%20mobiliada%20no%20Villages%20Piranhas."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-offwhite transition-all hover:bg-forest-deep hover:shadow-[var(--shadow-elev)]"
              >
                Quero conhecer <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-graphite/20 px-6 py-3 text-sm font-medium text-graphite transition-colors hover:border-forest hover:text-forest"
              >
                Simular financiamento
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
