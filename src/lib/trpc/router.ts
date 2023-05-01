// import type { Context } from "$lib/trpc/context"
// import { initTRPC } from "@trpc/server"

// export const t = initTRPC.context<Context>().create()

// export const router = t.router({
//   greeting: t.procedure.query(async () => {
//     return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`
//   }),
// })

// export type Router = typeof router

import { users } from "$lib/trpc/routes/users"
import { t } from "$lib/trpc/t"
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"

export const router = t.router({
  users,
  greeting: t.procedure.query(async () => {
    return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`
  }),
})

export type Router = typeof router

// 👇 type helpers 💡
export type RouterInputs = inferRouterInputs<Router>
export type RouterOutputs = inferRouterOutputs<Router>
