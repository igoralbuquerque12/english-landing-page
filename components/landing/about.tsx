import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl rotate-3" />
              <Image
                src="/images/pedro.jpg"
                alt="Pedro - Professor de Ingles"
                width={400}
                height={500}
                className="relative rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Quem e Pedro?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Sou professor de ingles apaixonado por ensinar de verdade. Nao
              acredito em turmas lotadas ou metodos genericos. Cada aluno e
              unico, e cada aula deve refletir isso.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Meu foco e simples: voce aprende{" "}
              <span className="font-semibold text-slate-800">
                ingles que funciona
              </span>
              . Conversacao fluida, confianca genuina, e resultados que voce ve
              na pratica, em reunioes, viagens, negociacoes, ou simplesmente
              conversando.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white rounded-full px-6"
              >
                <a
                  href="https://instagram.com/pedroconvos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-black hover:bg-slate-800 text-white rounded-full px-6 border-black"
              >
                <a
                  href="https://tiktok.com/@pedroconvos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  TikTok
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
