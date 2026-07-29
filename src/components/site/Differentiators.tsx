import {
  ShieldCheck,
  Trees,
  MapPin,
  Sparkles,
  TrendingUp,
  Heart,
  Users,
  Compass,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: ShieldCheck, title: "Segurança 24 horas", text: "Portaria assistida, ronda motorizada e monitoramento contínuo." },
  { icon: Trees, title: "Natureza preservada", text: "Áreas verdes protegidas, trilhas e paisagismo cuidadosamente desenhado." },
  { icon: MapPin, title: "Excelente localização", text: "Acesso privilegiado a Piranhas, com infraestrutura urbana próxima." },
  { icon: Sparkles, title: "Infraestrutura completa", text: "Ruas pavimentadas, iluminação premium e redes soterradas." },
  { icon: TrendingUp, title: "Alta valorização", text: "Empreendimento com histórico consistente de valorização patrimonial." },
  { icon: Heart, title: "Qualidade de vida", text: "Ambiente silencioso, ar puro e proximidade com o rio São Francisco." },
  { icon: Users, title: "Áreas de convivência", text: "Espaços projetados para o encontro de famílias e amigos." },
  { icon: Compass, title: "Mobilidade fluida", text: "Vias amplas, arborizadas e planejadas para pedestres." },
];

export function Differentiators() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="diferenciais" ref={ref} className="relative bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div data-reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Diferenciais</span>
            </div>
            <h2 className="display-lg text-graphite">
              Um endereço pensado
              <br />
              para <span className="italic text-forest">durar gerações</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Cada detalhe do Villages Piranha foi concebido para oferecer o
              equilíbrio raro entre sofisticação, segurança e contato com a
              natureza — a essência do luxo silencioso.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
            {items.map((it, i) => (
              <div
                key={it.title}
                data-reveal
                style={{ transitionDelay: `${i * 60}ms` }}
                className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-bone"
              >
                <it.icon className="h-6 w-6 text-forest transition-transform group-hover:scale-110" strokeWidth={1.4} />
                <h3 className="font-display text-xl text-graphite">{it.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
