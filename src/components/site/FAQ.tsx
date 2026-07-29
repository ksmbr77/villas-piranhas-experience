import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { q: "Como funciona o processo de compra?", a: "Após a visita ao empreendimento, nosso consultor apresenta as unidades disponíveis, condições comerciais e opções de financiamento. Toda a documentação é preparada pela nossa equipe jurídica." },
  { q: "Quais opções de financiamento estão disponíveis?", a: "Trabalhamos com financiamento direto e com os principais bancos, incluindo Caixa e Banco do Brasil, com prazos de até 360 meses." },
  { q: "Como agendar uma visita ao condomínio?", a: "Basta preencher o formulário ao final desta página ou nos chamar no WhatsApp. Recomendamos agendamento prévio para uma experiência exclusiva." },
  { q: "Quais documentos são necessários?", a: "RG, CPF, comprovante de residência e comprovante de renda. Para financiamento bancário, o banco poderá solicitar documentos adicionais." },
  { q: "Como funciona a segurança do condomínio?", a: "Portaria 24 horas com controle biométrico, ronda motorizada, cerca perimetral e monitoramento por câmeras em pontos estratégicos." },
  { q: "Existe taxa de condomínio? Qual o valor?", a: "Sim, com valores compatíveis com o padrão do empreendimento. Nossa equipe apresenta o detalhamento na visita." },
];

export function FAQ() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div data-reveal className="mb-14 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Perguntas frequentes</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="display-lg text-graphite">
            Tudo o que você precisa <span className="italic text-forest">saber</span>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full" data-reveal>
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-6 text-left font-display text-lg text-graphite hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
