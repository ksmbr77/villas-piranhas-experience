import { ArrowDown, MessageCircle, Shield, TreePine, Home, MapPin } from "lucide-react";
import heroImg from "@/assets/villages-aerial.jpg.asset.json";

const indicators = [
  { icon: Shield, label: "Segurança 24h" },
  { icon: TreePine, label: "Infraestrutura completa" },
  { icon: Home, label: "Casas mobiliadas e lotes" },
  { icon: MapPin, label: "Piranhas · Sergipe" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg.url}
          alt="Vista aérea do condomínio Villages Piranhas em Piranhas, Sergipe"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 30%", transform: "scale(1.08)", transformOrigin: "center top" }}
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/75 via-forest-deep/45 to-forest-deep/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.15_0.02_155/0.6)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-14 pt-36 lg:px-10 lg:pt-40">
        <div className="max-w-4xl animate-float-in">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="eyebrow-light">Villages Piranhas · Sergipe</span>
          </div>

          <h1 className="display-xl text-offwhite">
            História, charme
            <br />
            e{" "}
            <span className="italic text-gold-soft">exclusividade</span>
            <br />
            em Piranhas/SE.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-offwhite/85">
            Condomínio fechado de alto padrão no coração do sertão sergipano.
            Casas mobiliadas a partir de <strong className="text-offwhite">R$ 550 mil</strong>,
            lotes a partir de <strong className="text-offwhite">R$ 70 mil</strong> e
            aluguel de temporada a partir de <strong className="text-offwhite">R$ 800/diária</strong>.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 rounded-full bg-offwhite px-7 py-4 text-sm font-medium text-forest-deep transition-all hover:bg-gold hover:shadow-[var(--shadow-luxe)]"
            >
              Agendar visita privada
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://wa.me/5579981144487"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-offwhite/40 px-7 py-4 text-sm font-medium text-offwhite backdrop-blur-sm transition-all hover:border-offwhite hover:bg-offwhite/10"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-offwhite/15 md:grid-cols-4">
            {indicators.map((it) => (
              <div
                key={it.label}
                className="flex items-center gap-3 bg-forest-deep/40 px-5 py-5 backdrop-blur-md"
              >
                <it.icon className="h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-offwhite/90">{it.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <a
              href="#diferenciais"
              className="flex flex-col items-center gap-3 text-offwhite/60 transition-colors hover:text-offwhite"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase">Explorar</span>
              <ArrowDown className="h-4 w-4 animate-bounce-y" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
