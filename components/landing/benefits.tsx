import { Monitor, Calendar, Grid3X3 } from "lucide-react"

const benefits = [
  {
    icon: Monitor,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    title: "100% Personalizado",
    description:
      "Cada aula e desenhada para voce. Ingles para negocios? Juridico? Turismo? Conversacao casual? Voce escolhe o foco. Material exclusivo, ritmo seu, objetivos seus. Do basico ao avancado.",
  },
  {
    icon: Calendar,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
    title: "Flexibilidade Total",
    description:
      "Aulas 100% online. Seu horario. Sua casa. Qualquer lugar. Sem deslocamento, sem perda de tempo. Reagende quando precisar. Sua agenda e sagrada. Aprender nao deve ser estressante.",
  },
  {
    icon: Grid3X3,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-100",
    title: "Resultados Reais",
    description:
      "Conversacao desde o dia 1. Voce fala, erra, aprende. Desenvolvemos fluencia natural, confianca para apresentacoes, negociacoes e interacoes autenticas. Ingles que funciona na vida real.",
  },
]

export function Benefits() {
  return (
    <section id="metodo" className="py-24 bg-gradient-to-b from-blue-100/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Por que aulas One a One funcionam?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Enquanto turmas genericas deixam voce para tras, aulas personalizadas
            te colocam no centro. Aqui, voce aprende o que realmente importa.
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
