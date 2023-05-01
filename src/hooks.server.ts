import GitHub from "@auth/core/providers/github"
import { router } from "$lib/trpc/router"
import { sequence } from "@sveltejs/kit/hooks"
import type { Handle } from "@sveltejs/kit"
import { SvelteKitAuth } from "@auth/sveltekit"
import { createContext } from "$lib/trpc/context"
import { createTRPCHandle } from "trpc-sveltekit"
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "$env/static/private"

const trpcHandle: Handle = createTRPCHandle({ router, createContext })
const authHandle = SvelteKitAuth({
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }) as any,
  ],
})

export const handle = sequence(authHandle, trpcHandle)
