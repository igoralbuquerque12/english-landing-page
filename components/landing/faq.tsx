"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Para quem sao essas aulas?",
    answer:
      "As aulas sao para qualquer pessoa que queira aprender ingles de forma personalizada, seja para carreira, viagens, estudos ou simplesmente para se comunicar melhor. Do iniciante ao avancado, adapto o conteudo para suas necessidades.",
  },
  {
    question: "Como funcionam as aulas One a One?",
    answer:
      "As aulas acontecem online, ao vivo, em horarios que voce escolhe. Cada aula e 100% focada em voce, com material exclusivo preparado de acordo com seus objetivos e nivel atual.",
  },
  {
    question: "Nunca estudei ingles. Consigo acompanhar?",
    answer:
      "Com certeza! Muitos dos meus alunos comecaram do zero. O metodo e personalizado, entao vamos no seu ritmo, construindo uma base solida antes de avancar.",
  },
  {
    question: "Minha agenda e apertada. Como funciona?",
    answer:
      "Flexibilidade total. Voce escolhe os horarios que funcionam para voce, e pode reagendar quando precisar. Sem estresse, sem rigidez.",
  },
  {
    question: "Qual e o material de aula?",
    answer:
      "Todo material e preparado exclusivamente para voce, baseado nos seus objetivos. Usamos recursos variados: videos, textos, exercicios interativos, e muita conversacao pratica.",
  },
]

export function FAQ() {
  return (
    <section id="duvidas" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
          Duvidas Frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-50 rounded-xl px-6 border-none"
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
