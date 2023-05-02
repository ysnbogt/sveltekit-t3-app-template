import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"

import { posts } from "$lib/trpc/routes/posts"
import { t } from "$lib/trpc/t"

export const router = t.router({
  posts,
  cards: t.procedure.query(async () => {
    return 4
  }),
})

export type Router = typeof router

// 👇 type helpers 💡
export type RouterInputs = inferRouterInputs<Router>
export type RouterOutputs = inferRouterOutputs<Router>
