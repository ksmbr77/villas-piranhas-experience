import { MessageCircle } from "lucide-react";
import ctaImg from "@/assets/villages-house.jpg.asset.json";
import { useReveal } from "@/hooks/use-reveal";

export function FinalCTA() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative min-h-[70vh] overflow-hidden">
      <img src={ctaImg.url} alt="Casa no Villages Piranhas ao entardecer" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-forest-deep/30" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center text-offwhite">
        <div data-reveal className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-gold" />
          <span className="eyebrow-light">Villages Piranhas</span>
          <span className="h-px w-12 bg-gold" />
        </div>
        <h2 data-reveal className="display-xl text-offwhite">
          Seu novo lar
          <br />
          <span className="italic text-gold-soft">começa aqui.</span>
        </h2>
        <p data-reveal className="mt-8 max-w-lg text-base leading-relaxed text-offwhite/80">
          Um endereço para quem valoriza tempo, natureza e patrimônio. Marque uma
          visita e sinta a diferença ao cruzar a portaria.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contato"
            className="rounded-full bg-offwhite px-8 py-4 text-sm font-medium text-forest-deep transition-all hover:bg-gold hover:shadow-[var(--shadow-luxe)]"
          >
            Agendar visita
          </a>
          <a
            href="https://wa.me/5579999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-offwhite/40 px-8 py-4 text-sm font-medium text-offwhite transition-colors hover:bg-offwhite/10"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
