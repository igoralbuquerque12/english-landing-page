"use client";

import {
  Briefcase,
  Plane,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-linear-to-br from-blue-50 via-slate-50 to-blue-100 pt-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-3xl rotate-12" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-300/20 rounded-3xl -rotate-12" />
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-blue-200/25 rounded-2xl rotate-45" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="text-amber-500">★</span>
              AULAS PERSONALIZADAS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Inglês <span className="text-blue-600">One a One</span>:
              <br />A atenção que você merece.
            </h1>

            <p className="text-slate-500 font-medium text-xl max-w-xl leading-relaxed">
              Aulas 100% personalizadas para você. Do inglês básico ao avançado.
              Foco total em conversação, confiança e resultados reais. Aprenda
              para sua carreira, viagens ou domine uma área específica no seu
              ritmo, com material exclusivo e aulas focadas em conversação.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                onClick={scrollToForm}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-blue-200"
              >
                Quero Destravar Meu Inglês
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white rounded-full px-6 py-6 text-base font-medium border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
              >
                <a
                  href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Agendar conversa
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl shadow-blue-100/50 space-y-4 border border-white">
            <div className="flex items-center gap-5 p-5 bg-white rounded-2xl hover:shadow-md transition-shadow border border-slate-50">
              <div className="p-3.5 bg-blue-600 rounded-2xl shrink-0 shadow-sm">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">
                  Inglês para Carreira
                </h3>
                <p className="text-slate-500">
                  Business, jurídico e corporativo
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-2xl hover:shadow-md transition-shadow border border-slate-50">
              <div className="p-3.5 bg-teal-500 rounded-2xl shrink-0 shadow-sm">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">
                  Preparação para Viagens
                </h3>
                <p className="text-slate-500">
                  Aeroporto, hotel, interações sociais
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-2xl hover:shadow-md transition-shadow border border-slate-50">
              <div className="p-3.5 bg-blue-500 rounded-2xl shrink-0 shadow-sm">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">
                  Conversação Ativa
                </h3>
                <p className="text-slate-500">
                  Fluência e confiança garantidas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
