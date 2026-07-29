import { Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const reviews = [
  {
    name: "Ana Beatriz Cavalcante",
    role: "Moradora, Villa Aurora",
    text: "Nos apaixonamos pela sensação de estarmos em um refúgio, com toda a estrutura da cidade a poucos minutos.",
    initial: "A",
  },
  {
    name: "Rodrigo Menezes",
    role: "Investidor",
    text: "A valorização foi acima do esperado e o padrão de acabamento entrega exatamente o que foi prometido.",
    initial: "R",
  },
  {
    name: "Família Vasconcelos",
    role: "Segunda residência",
    text: "É o lugar onde nossos filhos podem correr livres. A segurança e o silêncio fizeram toda a diferença.",
    initial: "V",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-bone py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div data-reveal className="mb-14 max-w-2xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Quem já vive aqui</span>
          </div>
          <h2 className="display-lg text-graphite">
            Histórias que
            <br />
            <span className="italic text-forest">se tornam lar</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="flex flex-col rounded-2xl bg-card p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 font-display text-xl leading-snug text-graphite">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-forest font-display text-lg text-offwhite">
                  {r.initial}
                </div>
                <div>
                  <div className="text-sm font-medium text-graphite">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
