import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { TRPCProvider } from '@/components/providers/trpc-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Pedro Convos | Aulas de Ingles One a One',
  description: 'Aulas de ingles 100% personalizadas. Do iniciante ao avancado. Foco total em conversacao, confianca e resultados reais.',
  generator: 'v0.app',
  keywords: ['ingles', 'aulas particulares', 'professor de ingles', 'ingles online', 'conversacao'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <TRPCProvider>
          {children}
        </TRPCProvider>
        <Analytics />
      </body>
    </html>
  )
}
