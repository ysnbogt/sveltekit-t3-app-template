import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"

import { users } from "$lib/trpc/routes/users"
import { t } from "$lib/trpc/t"

export const router = t.router({
  users,
  cards: t.procedure.query(async () => {
    return 4
  }),
})

export type Router = typeof router

// 👇 type helpers 💡
export type RouterInputs = inferRouterInputs<Router>
export type RouterOutputs = inferRouterOutputs<Router>
