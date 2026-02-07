"use client"

import { Briefcase, Plane } from "lucide-react"

export function Hero() {
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
              AULAS PERSONALIZADAS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Inglês{" "}
              <span className="text-blue-600">One</span>
              <br />
              <span className="text-blue-600">a One</span>:
              <br />
              A atenção que
              <br />
              você merece.
            </h1>
          </div>

          {/* Right Column - Service Cards */}
          <div className="bg-slate-800 backdrop-blur-sm rounded-3xl p-6 shadow-xl shadow-blue-100/50 space-y-4">
            <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-2xl hover:bg-slate-700 transition-colors">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Inglês para Carreira
                </h3>
                <p className="text-sm text-slate-300">
                  Business, jurídico e corporativo
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-2xl hover:bg-slate-700 transition-colors">
              <div className="p-3 bg-teal-500 rounded-xl">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Preparação para Viagens
                </h3>
                <p className="text-sm text-slate-300">Aeroporto, hotel, Interações sociais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
