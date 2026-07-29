import { Instagram } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function VideoSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div data-reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Do nosso Instagram</span>
            </div>
            <h2 className="display-lg text-graphite">
              O empreendimento em <span className="italic text-forest">movimento</span>.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/casavillagespiranhas/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest story-underline"
            data-reveal
          >
            <Instagram className="h-4 w-4" /> @casavillagespiranhas
          </a>
        </div>

        <div data-reveal className="mx-auto max-w-md overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-elev)]">
          <iframe
            src="https://www.instagram.com/p/DHbdIajp0cr/embed"
            className="h-[720px] w-full"
            frameBorder="0"
            scrolling="no"
            allow="encrypted-media"
            title="Casas Villages Piranhas — Instagram"
          />
        </div>
      </div>
    </section>
  );
}
