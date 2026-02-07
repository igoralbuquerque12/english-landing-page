"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Para quem são essas aulas?",
    answer:
      "As aulas são para qualquer pessoa que queira aprender inglês de forma personalizada, seja para carreira, viagens, estudos ou simplesmente para se comunicar melhor. Do iniciante ao avançado, adapto o conteúdo para suas necessidades.",
  },
  {
    question: "Como funcionam as aulas One a One?",
    answer:
      "As aulas acontecem online, ao vivo, em horários que você escolhe. Cada aula é 100% focada em você, com material exclusivo preparado de acordo com seus objetivos e nível atual.",
  },
  {
    question: "Nunca estudei inglês. Consigo acompanhar?",
    answer:
      "Com certeza! Muitos dos meus alunos começaram do zero. O método é personalizado, então vamos no seu ritmo, construindo uma base sólida antes de avançar.",
  },
  {
    question: "Minha agenda é apertada. Como funciona?",
    answer:
      "Flexibilidade total. Você escolhe os horários que funcionam para você, e pode reagendar quando precisar. Sem estresse, sem rigidez.",
  },
  {
    question: "Qual é o material de aula?",
    answer:
      "Todo material é preparado exclusivamente para você, baseado nos seus objetivos. Usamos recursos variados: vídeos, textos, exercícios interativos, e muita conversação prática.",
  },
]

export function FAQ() {
  return (
    <section id="duvidas" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
          Dúvidas Frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl px-6 border-none shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-800 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

