import { MapPinned, Landmark, CircleDollarSign } from "lucide-react";
import lotImg from "@/assets/villages-aerial.jpg.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const lots = [
  { code: "L-04", area: "200 m²", price: "R$ 70.000", status: "Disponível", finance: "Até 60x" },
  { code: "L-11", area: "260 m²", price: "R$ 92.000", status: "Disponível", finance: "Até 60x" },
  { code: "L-18", area: "320 m²", price: "R$ 118.000", status: "Últimas unidades", finance: "Até 72x" },
];

export function Lots() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="lotes" ref={ref} className="relative overflow-hidden bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div data-reveal className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elev)]">
              <img
                src={lotImg.url}
                alt="Vista aérea dos lotes disponíveis no Villages Piranhas"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 glass max-w-[240px] rounded-2xl p-6 shadow-[var(--shadow-soft)] hidden md:block">
              <div className="eyebrow">Lotes</div>
              <p className="mt-3 font-display text-2xl text-graphite">A partir de R$ 70 mil</p>
              <p className="mt-1 text-xs text-muted-foreground">Condições especiais e parcelamento facilitado.</p>
            </div>
          </div>

          <div>
            <div data-reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <span className="eyebrow">Lotes disponíveis</span>
              </div>
              <h2 className="display-lg text-graphite">
                Construa o lar
                <br />
                <span className="italic text-forest">à sua medida</span>.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Terrenos dentro do condomínio fechado, com infraestrutura completa,
                segurança e ruas pavimentadas. Um investimento sólido em Piranhas/SE,
                a partir de <strong className="text-graphite">R$ 70 mil</strong>.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              {lots.map((lot, i) => (
                <div
                  key={lot.code}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-forest/40 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest text-offwhite">
                      <MapPinned className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-lg text-graphite">Lote {lot.code}</span>
                        <span className="rounded-full bg-forest/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-forest">
                          {lot.status}
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-x-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1"><Landmark className="h-3 w-3" /> {lot.area}</span>
                        <span className="inline-flex items-center gap-1"><CircleDollarSign className="h-3 w-3" /> {lot.finance}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-lg text-forest">{lot.price}</span>
                    <a
                      href="https://wa.me/5579981144487?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20lote%20do%20Villages%20Piranhas."
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-graphite px-4 py-2 text-[11px] font-medium tracking-wide text-offwhite transition-colors hover:bg-forest"
                    >
                      Tenho interesse
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
