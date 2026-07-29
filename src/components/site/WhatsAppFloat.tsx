import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5579981144487"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-forest px-5 py-4 text-sm font-medium text-offwhite shadow-[var(--shadow-luxe)] transition-all hover:bg-forest-deep hover:pr-6"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
      </span>
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Fale conosco</span>
    </a>
  );
}
