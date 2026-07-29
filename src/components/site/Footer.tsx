import { Instagram, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-4 lg:gap-16 lg:px-10">
        <div className="lg:col-span-2">
          <div className="font-display text-2xl text-graphite">
            Villages<span className="text-gold"> · </span>Piranhas
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Um condomínio residencial exclusivo, onde arquitetura, natureza e
            segurança se encontram para redefinir o padrão de morar bem.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Navegar</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a className="story-underline" href="#diferenciais">Diferenciais</a></li>
            <li><a className="story-underline" href="#casas">Casas</a></li>
            <li><a className="story-underline" href="#lotes">Lotes</a></li>
            <li><a className="story-underline" href="#lazer">Área de lazer</a></li>
            <li><a className="story-underline" href="#contato">Contato</a></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Contato</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-forest" /> Piranhas · Sergipe</li>
            <li>
              <a href="https://wa.me/5579981144487" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 story-underline">
                <Phone className="h-3.5 w-3.5 text-forest" /> +55 79 9811-4487
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/casavillagespiranhas/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 story-underline">
                <Instagram className="h-3.5 w-3.5 text-forest" /> @casavillagespiranhas
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border px-6 pt-8 text-[11px] text-muted-foreground sm:flex-row lg:px-10">
        <span>© {new Date().getFullYear()} Casas Villages Piranhas. Todos os direitos reservados.</span>
        <span>Imagens meramente ilustrativas.</span>
      </div>
    </footer>
  );
}
