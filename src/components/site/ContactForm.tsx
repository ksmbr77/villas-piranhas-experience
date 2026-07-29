import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  phone: z.string().trim().min(8, "Telefone inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  interest: z.string().min(1, "Selecione uma opção"),
  message: z.string().trim().max(1000).optional(),
});

const WHATSAPP = "5579999999999";

export function ContactForm() {
  const ref = useReveal<HTMLElement>();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      interest: String(fd.get("interest") ?? ""),
      message: String(fd.get("message") ?? ""),
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
    // Simulate submission
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSent(true);

    const text = encodeURIComponent(
      `Olá, sou ${parsed.data.name}. Tenho interesse em: ${parsed.data.interest}. ${parsed.data.message ?? ""}`,
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  }

  return (
    <section id="contato" ref={ref} className="relative overflow-hidden bg-forest-deep py-24 text-offwhite lg:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_10%,oklch(0.72_0.11_80/0.25),transparent_50%),radial-gradient(circle_at_80%_90%,oklch(0.32_0.06_155/0.4),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow-light">Atendimento</span>
            </div>
            <h2 className="display-lg text-offwhite">
              Conte-nos sobre
              <br />
              o seu <span className="italic text-gold-soft">novo lar</span>.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-offwhite/70">
              Nossa equipe de consultores retorna em até 2 horas úteis com uma
              apresentação personalizada. Discrição e atenção total ao seu tempo.
            </p>

            <ul className="mt-10 space-y-3 text-sm text-offwhite/80">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Consultoria dedicada
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Simulação financeira sob medida
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Visita privada agendada
              </li>
            </ul>
          </div>

          <form
            data-reveal
            onSubmit={onSubmit}
            className="glass-dark rounded-3xl p-8 lg:p-10"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-gold" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-2xl text-offwhite">Recebido com carinho.</h3>
                <p className="mt-3 max-w-sm text-sm text-offwhite/70">
                  Estamos abrindo o WhatsApp para dar continuidade ao seu atendimento.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                <Field label="Nome completo" name="name" error={errors.name} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Telefone / WhatsApp" name="phone" error={errors.phone} />
                  <Field label="E-mail" name="email" type="email" error={errors.email} />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-offwhite/60">
                    Interesse
                  </label>
                  <select
                    name="interest"
                    defaultValue=""
                    className="w-full rounded-xl border border-offwhite/15 bg-offwhite/5 px-4 py-3 text-sm text-offwhite outline-none transition-colors focus:border-gold"
                  >
                    <option value="" disabled className="bg-forest-deep">Selecione</option>
                    <option value="Comprar casa" className="bg-forest-deep">Comprar casa</option>
                    <option value="Comprar lote" className="bg-forest-deep">Comprar lote</option>
                    <option value="Alugar casa" className="bg-forest-deep">Alugar casa</option>
                    <option value="Agendar visita" className="bg-forest-deep">Agendar visita</option>
                    <option value="Atendimento personalizado" className="bg-forest-deep">Atendimento personalizado</option>
                  </select>
                  {errors.interest && <p className="mt-1.5 text-xs text-destructive">{errors.interest}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-offwhite/60">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-offwhite/15 bg-offwhite/5 px-4 py-3 text-sm text-offwhite outline-none transition-colors focus:border-gold"
                    placeholder="Conte-nos como podemos ajudar."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-medium text-forest-deep transition-all hover:bg-offwhite disabled:opacity-60"
                >
                  {submitting ? (
                    <span className="animate-shimmer">Enviando…</span>
                  ) : (
                    <>
                      Enviar e falar no WhatsApp <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-offwhite/50">
                  Ao enviar, você concorda em receber contato da nossa equipe comercial.
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
  error,
}: {
  label: string;
  name: string;
  type?: string;
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
        className="w-full rounded-xl border border-offwhite/15 bg-offwhite/5 px-4 py-3 text-sm text-offwhite outline-none transition-colors focus:border-gold"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
