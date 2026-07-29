import { School, ShoppingBasket, Cross, Hospital, Building2, Route, ExternalLink } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const points = [
  { icon: School, label: "Escolas", dist: "5 min" },
  { icon: ShoppingBasket, label: "Mercados", dist: "6 min" },
  { icon: Cross, label: "Farmácias", dist: "4 min" },
  { icon: Hospital, label: "Hospitais", dist: "12 min" },
  { icon: Building2, label: "Centro", dist: "10 min" },
  { icon: Route, label: "Rodovias", dist: "8 min" },
];

export function Location() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="localizacao" ref={ref} className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div data-reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Localização</span>
            </div>
            <h2 className="display-lg text-graphite">
              A cidade perto.
              <br />
              <span className="italic text-forest">A natureza aqui.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              O Villages Piranhas fica em Piranhas, no sertão de Sergipe, combinando
              a serenidade do interior com a conveniência de estar a poucos minutos
              dos principais serviços da cidade.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {points.map((p, i) => (
                <div
                  key={p.label}
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                  className="rounded-2xl border border-border bg-card p-4 transition-colors hover:border-forest/40"
                >
                  <p.icon className="mb-3 h-5 w-5 text-forest" strokeWidth={1.4} />
                  <div className="text-sm font-medium text-graphite">{p.label}</div>
                  <div className="text-xs text-muted-foreground">{p.dist}</div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Localização Villages Piranhas em Piranhas, Sergipe"
              src="https://maps.google.com/maps?q=Piranhas%2C%20Sergipe%2C%20Brasil&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[520px] w-full grayscale-[35%] contrast-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              style={{ border: 0 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
