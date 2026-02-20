"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc-client";
import { Lock } from "lucide-react";

function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, "");

  if (numbers.length <= 2) {
    return numbers.length ? `(${numbers}` : "";
  }
  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }
  if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
}

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK ?? "#";

  const createLead = trpc.createLead.useMutation({
    onSuccess: () => {
      setSuccess(true);
      setName("");
      setPhone("");
    },
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.length >= 14) {
      createLead.mutate({ name: name.trim(), phone });
    }
  };

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
                  onChange={e => setName(e.target.value)}
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
                disabled={
                  createLead.isPending ||
                  name.trim().length < 2 ||
                  phone.length < 14
                }
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
                Seus dados estão seguros e criptografados. Nunca
                compartilharemos com terceiros.
              </p>
            </div>
          </form>
        )}

        <div className="mt-8 space-y-3 text-center">
          <p className=" text-slate-600">Ou fale comigo direto no Whatsapp:</p>
          <Button
            asChild
            className="w-45 h-11 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold text-base shadow-lg shadow-green-200"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M20.52 3.48A11.82 11.82 0 0 0 12 0a11.83 11.83 0 0 0-10.2 17.93L0 24l6.2-1.79A11.77 11.77 0 0 0 12 24h.01A11.83 11.83 0 0 0 24 11.99a11.8 11.8 0 0 0-3.48-8.51ZM12.01 21.6h-.01a9.55 9.55 0 0 1-4.88-1.34l-.35-.21-3.68 1.06 1.05-3.5-.22-.36A9.57 9.57 0 0 1 12 2.4a9.44 9.44 0 0 1 6.78 2.81 9.42 9.42 0 0 1 2.83 6.78 9.56 9.56 0 0 1-9.6 9.61Zm5.26-7.22c-.29-.15-1.71-.84-1.97-.94s-.46-.15-.66.15-.76.94-.94 1.13-.35.22-.64.07a7.68 7.68 0 0 1-2.25-1.39 8.4 8.4 0 0 1-1.55-1.93c-.16-.29 0-.45.12-.6s.29-.35.43-.53a2 2 0 0 0 .29-.48.53.53 0 0 0-.02-.52c-.07-.15-.66-1.6-.9-2.2s-.48-.5-.66-.51h-.57a1.1 1.1 0 0 0-.79.37A3.32 3.32 0 0 0 6 9.26 5.77 5.77 0 0 0 7.22 12a13.26 13.26 0 0 0 5.09 5c.7.3 1.24.48 1.67.61a4 4 0 0 0 1.84.11 3 3 0 0 0 2-1.42 2.44 2.44 0 0 0 .17-1.42c-.07-.15-.26-.22-.55-.37Z"
                  fill="currentColor"
                />
              </svg>
              Abrir Whatsapp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
