"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <span className="text-slate-800">PEDRO</span>
          <span className="text-blue-600">CONVOS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#metodo"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Metodo
          </Link>
          <Link
            href="#sobre"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#duvidas"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Duvidas
          </Link>
        </nav>

        <Button
          onClick={scrollToForm}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
        >
          Agendar Conversa
        </Button>
      </div>
    </header>
  )
}
