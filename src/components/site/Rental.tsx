import { BedDouble, Bath, Car, Ruler, MessageCircle, KeyRound, Waves } from "lucide-react";
import rental from "@/assets/villages-house.jpg.asset.json";
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
                alt="Casa para aluguel de temporada no Villages Piranhas com piscina privativa"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -top-5 left-5 rounded-full bg-gold px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-forest-deep shadow-[var(--shadow-soft)]">
              Aluguel por temporada
            </div>
            <div className="absolute -bottom-6 right-4 hidden rounded-2xl bg-forest-deep px-6 py-4 text-offwhite shadow-[var(--shadow-elev)] md:block">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">Diária a partir de</div>
              <div className="mt-1 font-display text-2xl">R$ 800</div>
              <div className="text-[11px] text-offwhite/70">em dias comuns</div>
            </div>
          </div>

          <div>
            <div data-reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <span className="eyebrow">Aluguel de temporada</span>
              </div>
              <h2 className="display-lg text-graphite">
                Loft de alto padrão
                <br />
                <span className="italic text-forest">com piscina privativa</span>.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Casa contemporânea totalmente mobiliada, com piscina privativa, área
                gourmet integrada e acabamento premium. Uma experiência autêntica do
                Villages Piranhas — ideal para famílias, casais e grupos que buscam
                conforto e privacidade em Piranhas/SE.
              </p>
              <p className="mt-4 text-sm font-medium text-forest">
                A partir de R$ 800 por diária em dias comuns.
              </p>
            </div>

            <dl
              data-reveal
              className="mt-10 grid grid-cols-4 gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="text-center">
                <Ruler className="mx-auto mb-2 h-5 w-5 text-forest" strokeWidth={1.4} />
                <dd className="font-display text-lg text-graphite">140 m²</dd>
                <dt className="text-[11px] text-muted-foreground">Construído</dt>
              </div>
              <div className="text-center">
                <BedDouble className="mx-auto mb-2 h-5 w-5 text-forest" strokeWidth={1.4} />
                <dd className="font-display text-lg text-graphite">2</dd>
                <dt className="text-[11px] text-muted-foreground">Suítes</dt>
              </div>
              <div className="text-center">
                <Waves className="mx-auto mb-2 h-5 w-5 text-forest" strokeWidth={1.4} />
                <dd className="font-display text-lg text-graphite">Sim</dd>
                <dt className="text-[11px] text-muted-foreground">Piscina</dt>
              </div>
              <div className="text-center">
                <Car className="mx-auto mb-2 h-5 w-5 text-forest" strokeWidth={1.4} />
                <dd className="font-display text-lg text-graphite">2</dd>
                <dt className="text-[11px] text-muted-foreground">Vagas</dt>
              </div>
            </dl>

            <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5579999999999?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20alugar%20uma%20casa%20no%20Villages%20Piranhas%20(SE)."
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
