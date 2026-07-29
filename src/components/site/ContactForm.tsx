import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import {
  CheckCircle2,
  Send,
  MessageCircle,
  ShieldCheck,
  Clock,
  Lock,
  Sparkles,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome"),
  phone: z
    .string()
    .trim()
    .min(14, "Informe um WhatsApp válido com DDD")
    .max(16),
  interest: z.string().min(1, "Selecione uma opção"),
  message: z.string().trim().max(1000).optional(),
});

const WHATSAPP = "5579981144487";
const WHATSAPP_DISPLAY = "+55 79 98114-4487";

const INTERESTS = [
  { value: "Comprar casa mobiliada", label: "Comprar casa mobiliada (R$ 550 mil)" },
  { value: "Comprar lote", label: "Comprar lote (a partir de R$ 70 mil)" },
  { value: "Alugar por temporada", label: "Alugar por temporada (R$ 800/diária)" },
  { value: "Agendar visita", label: "Agendar uma visita ao condomínio" },
  { value: "Investimento", label: "Investir no empreendimento" },
];

// Formata telefone BR enquanto o usuário digita: (79) 98114-4487
function formatPhoneBR(raw: string) {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function readTracking() {
  if (typeof window === "undefined") return { params: {} as Record<string, string>, referrer: "" };
  const url = new URL(window.location.href);
  const params: Record<string, string> = {};
  for (const [k, v] of url.searchParams.entries()) {
    if (/^utm_|^gclid$|^fbclid$|^ttclid$/i.test(k)) params[k] = v;
  }
  return { params, referrer: document.referrer || "direct" };
}

function fireConversion(eventName: string, payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  // Google Tag Manager / GA4
  // @ts-expect-error dataLayer é injetada por scripts externos (GTM)
  window.dataLayer = window.dataLayer || [];
  // @ts-expect-error dataLayer é injetada por scripts externos (GTM)
  window.dataLayer.push({ event: eventName, ...payload });
  // Meta Pixel (fbq), se estiver carregado via GTM ou script externo
  // @ts-expect-error fbq é injetada pelo pixel do Facebook
  if (typeof window.fbq === "function") {
    // @ts-expect-error fbq
    window.fbq("track", "Lead", payload);
  }
}

export function ContactForm() {
  const ref = useReveal<HTMLElement>();
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Pré-seleciona interesse via ?i= (útil para links da bio / anúncios)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const preset = params.get("i") || params.get("interesse");
    if (!preset) return;
    const key = preset.toLowerCase();
    const found = INTERESTS.find(
      (o) => o.value.toLowerCase().includes(key) || key.includes(o.value.toLowerCase().split(" ")[0]),
    );
    if (found) setInterest(found.value);
  }, []);

  const tracking = useMemo(readTracking, []);

  function buildWhatsAppUrl(data: {
    name: string;
    phone: string;
    interest: string;
    message?: string;
  }) {
    const lines = [
      `Olá! Sou ${data.name}.`,
      `Interesse: ${data.interest}.`,
      `WhatsApp: ${data.phone}.`,
    ];
    if (data.message) lines.push(`Mensagem: ${data.message}`);
    const utmKeys = Object.keys(tracking.params);
    if (utmKeys.length) {
      lines.push(
        `\n— origem: ${utmKeys.map((k) => `${k}=${tracking.params[k]}`).join(" · ")}`,
      );
    }
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone,
      interest,
      message: String(fd.get("message") ?? "") || undefined,
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const iss of parsed.error.issues) errs[String(iss.path[0])] = iss.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    fireConversion("lead_submit", {
      interest: parsed.data.interest,
      ...tracking.params,
      referrer: tracking.referrer,
    });
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSent(true);
    window.open(buildWhatsAppUrl(parsed.data), "_blank");
  }

  function directWhatsApp() {
    fireConversion("whatsapp_direct_click", { source: "contact_section", ...tracking.params });
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      "Olá! Vim pelo site do Villages Piranhas e quero saber mais.",
    )}`;
    window.open(url, "_blank");
  }

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden bg-forest-deep py-24 text-offwhite lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_10%,oklch(0.72_0.11_80/0.25),transparent_50%),radial-gradient(circle_at_80%_90%,oklch(0.32_0.06_155/0.4),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div data-reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow-light">Fale com um consultor</span>
            </div>
            <h2 className="display-lg text-offwhite">
              Últimas unidades
              <br />
              <span className="italic text-gold-soft">disponíveis</span>.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-offwhite/70">
              Poucos lotes e casas restantes nesta fase. Preencha em 30 segundos
              e receba condições exclusivas, valores atualizados e disponibilidade
              diretamente no seu WhatsApp.
            </p>

            {/* Atalho para quem prefere ir direto ao WhatsApp */}
            <button
              type="button"
              onClick={directWhatsApp}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-offwhite/20 bg-offwhite/5 px-6 py-4 text-sm font-medium text-offwhite transition-all hover:border-gold hover:bg-offwhite/10 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              Prefiro falar agora · {WHATSAPP_DISPLAY}
            </button>

            <ul className="mt-10 grid gap-3 text-sm text-offwhite/85">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                Resposta em até 15 minutos em horário comercial
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                Consultoria dedicada, sem custo e sem compromisso
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                Simulação de financiamento personalizada
              </li>
              <li className="flex items-start gap-3">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                Seus dados protegidos — nunca compartilhamos com terceiros
              </li>
            </ul>
          </div>

          <form
            data-reveal
            onSubmit={onSubmit}
            className="glass-dark rounded-3xl p-8 lg:p-10"
            noValidate
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-gold" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-2xl text-offwhite">
                  Recebido com carinho.
                </h3>
                <p className="mt-3 max-w-sm text-sm text-offwhite/70">
                  Abrimos o WhatsApp para dar continuidade ao seu atendimento. Se
                  não abriu automaticamente, toque no botão abaixo.
                </p>
                <button
                  type="button"
                  onClick={directWhatsApp}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-forest-deep"
                >
                  <MessageCircle className="h-4 w-4" /> Abrir WhatsApp
                </button>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="mb-1 inline-flex w-fit items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-gold-soft">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                  Últimas unidades disponíveis
                </div>

                <Field
                  label="Como podemos te chamar?"
                  name="name"
                  autoComplete="name"
                  placeholder="Seu nome completo"
                  error={errors.name}
                />

                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-offwhite/60">
                    WhatsApp com DDD
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="(79) 98114-4487"
                    value={phone}
                    onChange={(e) => setPhone(formatPhoneBR(e.target.value))}
                    className="w-full rounded-xl border border-offwhite/15 bg-offwhite/5 px-4 py-3 text-base text-offwhite outline-none transition-colors focus:border-gold"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-offwhite/60">
                    O que você procura?
                  </label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {INTERESTS.map((o) => {
                      const active = interest === o.value;
                      return (
                        <button
                          key={o.value}
                          type="button"
                          onClick={() => setInterest(o.value)}
                          className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                            active
                              ? "border-gold bg-gold/15 text-offwhite"
                              : "border-offwhite/15 bg-offwhite/5 text-offwhite/80 hover:border-offwhite/40"
                          }`}
                        >
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                  <input type="hidden" name="interest" value={interest} />
                  {errors.interest && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.interest}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-offwhite/60">
                    Mensagem <span className="normal-case tracking-normal text-offwhite/40">(opcional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full resize-none rounded-xl border border-offwhite/15 bg-offwhite/5 px-4 py-3 text-sm text-offwhite outline-none transition-colors focus:border-gold"
                    placeholder="Ex.: quero visitar no próximo fim de semana."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-medium text-forest-deep shadow-[var(--shadow-luxe)] transition-all hover:bg-offwhite disabled:opacity-60"
                >
                  {submitting ? (
                    <span className="animate-shimmer">Enviando…</span>
                  ) : (
                    <>
                      Falar com um consultor no WhatsApp
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-offwhite/50">
                  Ao enviar você será redirecionado para o WhatsApp
                  {" · "}
                  <Lock className="inline h-3 w-3 -translate-y-px" /> dados
                  protegidos (LGPD)
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-offwhite/60">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-offwhite/15 bg-offwhite/5 px-4 py-3 text-base text-offwhite outline-none transition-colors focus:border-gold"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
