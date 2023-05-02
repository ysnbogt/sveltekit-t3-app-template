import Discord from "@auth/core/providers/discord"
import GitHub from "@auth/core/providers/github"
import { SvelteKitAuth } from "@auth/sveltekit"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { sequence } from "@sveltejs/kit/hooks"
import { createTRPCHandle } from "trpc-sveltekit"

import type { Handle } from "@sveltejs/kit"

import {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
} from "$env/static/private"
import { createContext } from "$lib/trpc/context"
import { router } from "$lib/trpc/router"

const prisma = new PrismaClient()

const trpcHandle: Handle = createTRPCHandle({ router, createContext })
const authHandle = SvelteKitAuth({
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }) as any,
    Discord({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
    }) as any,
  ],
})

export const handle = sequence(authHandle, trpcHandle)
