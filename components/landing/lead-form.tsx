"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { trpc } from "@/lib/trpc-client"
import { Lock } from "lucide-react"

function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, "")

  if (numbers.length <= 2) {
    return numbers.length ? `(${numbers}` : ""
  }
  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  }
  if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
}

export function LeadForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [success, setSuccess] = useState(false)

  const createLead = trpc.createLead.useMutation({
    onSuccess: () => {
      setSuccess(true)
      setName("")
      setPhone("")
    },
  })

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setPhone(formatted)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && phone.length >= 14) {
      createLead.mutate({ name: name.trim(), phone })
    }
  }

  return (
    <section
      id="form-section"
      className="py-24 bg-gradient-to-b from-white to-slate-100"
    >
      <div className="container mx-auto px-4 max-w-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-slate-600">
            Deixe seus dados abaixo. Entraremos em contato em breve para agendar
            sua primeira aula.
          </p>
        </div>

        {success ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Cadastro realizado!
            </h3>
            <p className="text-green-600">
              Entraremos em contato em breve pelo WhatsApp.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700 font-medium">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700 font-medium">
                  Telefone (WhatsApp)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(XX) XXXXX-XXXX"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="h-12 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={createLead.isPending || name.trim().length < 2 || phone.length < 14}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-base"
              >
                {createLead.isPending ? "Enviando..." : "Quero Começar Agora!"}
              </Button>

              {createLead.isError && (
                <p className="text-red-500 text-sm text-center">
                  Erro ao enviar. Tente novamente.
                </p>
              )}

              <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" />
                Seus dados estão seguros e criptografados. Nunca compartilharemos
                com terceiros.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

