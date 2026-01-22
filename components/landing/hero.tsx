"use client"

import { Button } from "@/components/ui/button"
import { Briefcase, Plane, MessageCircle, CheckCircle2 } from "lucide-react"

export function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 pt-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-3xl rotate-12" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-300/20 rounded-3xl -rotate-12" />
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-blue-200/25 rounded-2xl rotate-45" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="text-amber-500">★</span>
              PERSONAL TEACHER
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight text-balance">
              Ingles{" "}
              <span className="text-blue-600">One a One</span>:
              <br />
              A atencao que voce merece.
            </h1>

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Aulas 100% personalizadas. Do iniciante ao avancado. Foco total em
              conversacao, confianca e resultados reais. Aprenda para sua
              carreira, viagens ou dominar uma area especifica, no seu ritmo,
              com material exclusivo.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToForm}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-medium"
              >
                Quero Destravar o meu Ingles
                <span className="ml-2">→</span>
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-6 text-base border-slate-300 text-slate-700 bg-transparent"
              >
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                Agenda Exclusiva
              </Button>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl shadow-blue-100/50 space-y-4">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">
                  Ingles para Carreira
                </h3>
                <p className="text-sm text-slate-500">
                  Business, Juridico & Corporativo
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
              <div className="p-3 bg-teal-500 rounded-xl">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">
                  Preparacao para Viagens
                </h3>
                <p className="text-sm text-slate-500">Aeroporto, Hotel, Social</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
              <div className="p-3 bg-blue-500 rounded-xl">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">
                  Conversacao Ativa
                </h3>
                <p className="text-sm text-slate-500">Fluencia e Confianca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
