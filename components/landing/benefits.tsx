import { MessageSquare, Calendar, Grid3X3 } from "lucide-react"

const benefits = [
  {
    icon: MessageSquare,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    title: "100% Personalizado",
    description:
      "Cada aula é desenhada especialmente para você. Inglês para negócios? Jurídico? Turismo? Conversação casual? Você escolhe o foco. Material exclusivo.",
  },
  {
    icon: Calendar,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
    title: "Flexibilidade Total",
    description:
      "Aulas 100% online. Seu horário. Sua casa. Qualquer lugar. Sem deslocamento, sem perda de tempo. Reagende quando precisar. Sua agenda é sagrada.",
  },
  {
    icon: Grid3X3,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-100",
    title: "Resultados Reais",
    description:
      "Conversação desde o dia 1. Você fala, erra, aprende. Desenvolvemos fluência natural, confiança para apresentações, negociações e interações autênticas.",
  },
]

export function Benefits() {
  return (
    <section id="metodo" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Por que aulas One a One funcionam?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Enquanto turmas genéricas deixam você para trás, aulas personalizadas
            te colocam no centro. Aqui, você aprende o que realmente importa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-100 hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div
                className={`inline-flex p-3 rounded-xl ${benefit.iconBg} mb-6`}
              >
                <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
