import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Benefits } from "@/components/landing/benefits"
import { About } from "@/components/landing/about"
import { FAQ } from "@/components/landing/faq"
import { LeadForm } from "@/components/landing/lead-form"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <About />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  )
}
