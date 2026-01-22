import { z } from "zod"
import { router, publicProcedure } from "./trpc"
import { getDatabase } from "./mongodb"

export const appRouter = router({
  createLead: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
        phone: z.string().min(14, "Telefone inválido"),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDatabase()
      const leads = db.collection("leads")

      const lead = {
        name: input.name,
        phone: input.phone,
        createdAt: new Date(),
      }

      await leads.insertOne(lead)

      return { success: true, message: "Lead cadastrado com sucesso!" }
    }),
})

export type AppRouter = typeof appRouter
