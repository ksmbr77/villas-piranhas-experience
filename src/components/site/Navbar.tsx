import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#casas", label: "Casas" },
  { href: "#lotes", label: "Lotes" },
  { href: "#lazer", label: "Lazer" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#top"
          className={`flex items-center gap-3 transition-colors ${
            scrolled ? "text-foreground" : "text-offwhite"
          }`}
        >
          <span className="font-display text-lg tracking-tight">
            Villages<span className="text-gold"> · </span>Piranhas
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] tracking-wide story-underline transition-colors ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-offwhite/85 hover:text-offwhite"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/5579981144487"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-[13px] font-medium text-offwhite transition-all hover:bg-forest-deep hover:shadow-[var(--shadow-elev)]"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar visita
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-offwhite"}`}
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-forest-deep text-offwhite animate-float-in lg:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-lg">Villages · Piranhas</span>
            <button onClick={() => setOpen(false)} aria-label="Fechar">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-8 pt-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl tracking-tight"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5579981144487"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-forest-deep"
            >
              <MessageCircle className="h-4 w-4" /> Agendar visita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
