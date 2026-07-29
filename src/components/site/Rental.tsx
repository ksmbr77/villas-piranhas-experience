import { BedDouble, Bath, Car, Ruler, MessageCircle, KeyRound } from "lucide-react";
import rental from "@/assets/rental-house.png.asset.json";
import { useReveal } from "@/hooks/use-reveal";

export function Rental() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="aluguel" ref={ref} className="relative bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div data-reveal className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elev)]">
              <img
                src={rental.url}
                alt="Casa para aluguel no Casas Villages Piranhas"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -top-5 left-5 rounded-full bg-gold px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-forest-deep shadow-[var(--shadow-soft)]">
              Disponível para alugar
            </div>
          </div>

          <div>
            <div data-reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <span className="eyebrow">Aluguel</span>
              </div>
              <h2 className="display-lg text-graphite">
                Experimente morar
                <br />
                <span className="italic text-forest">no Villages</span>.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Casa contemporânea com piscina privativa, fachada em pedra e amplas
                áreas de convívio. Uma oportunidade única para viver a experiência
                Villages antes de decidir pela compra.
              </p>
            </div>

            <dl
              data-reveal
              className="mt-10 grid grid-cols-4 gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="text-center">
                <Ruler className="mx-auto mb-2 h-5 w-5 text-forest" strokeWidth={1.4} />
                <dd className="font-display text-lg text-graphite">210 m²</dd>
                <dt className="text-[11px] text-muted-foreground">Construído</dt>
              </div>
              <div className="text-center">
                <BedDouble className="mx-auto mb-2 h-5 w-5 text-forest" strokeWidth={1.4} />
                <dd className="font-display text-lg text-graphite">3</dd>
                <dt className="text-[11px] text-muted-foreground">Quartos</dt>
              </div>
              <div className="text-center">
                <Bath className="mx-auto mb-2 h-5 w-5 text-forest" strokeWidth={1.4} />
                <dd className="font-display text-lg text-graphite">2</dd>
                <dt className="text-[11px] text-muted-foreground">Suítes</dt>
              </div>
              <div className="text-center">
                <Car className="mx-auto mb-2 h-5 w-5 text-forest" strokeWidth={1.4} />
                <dd className="font-display text-lg text-graphite">2</dd>
                <dt className="text-[11px] text-muted-foreground">Vagas</dt>
              </div>
            </dl>

            <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20alugar%20a%20casa%20do%20Villages%20Piranhas."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-offwhite transition-all hover:bg-forest-deep hover:shadow-[var(--shadow-elev)]"
              >
                <MessageCircle className="h-4 w-4" />
                Consultar disponibilidade
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-graphite/20 px-6 py-3.5 text-sm font-medium text-graphite transition-colors hover:border-forest hover:text-forest"
              >
                <KeyRound className="h-4 w-4" />
                Agendar visita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
