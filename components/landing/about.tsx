import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-white shadow-[0_0_60px_20px_rgba(59,130,246,0.3)]">
                <Image
                  src="/images/pedro.jpeg"
                  alt="Pedro - Professor de Inglês"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover scale-125"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Quem é Pedro?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Sou professor de inglês apaixonado por ensinar de verdade. Não
              acredito em turmas lotadas ou métodos genéricos. Cada aluno é
              único, e cada aula deve refletir isso.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Meu foco é simples: você aprende{" "}
              <span className="font-semibold text-slate-800">
                inglês que funciona
              </span>
              . Conversação fluida, confiança genuína, e resultados que você vê
              na prática: em reuniões, viagens, negociações, ou simplesmente
              conversando com confiança.
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

