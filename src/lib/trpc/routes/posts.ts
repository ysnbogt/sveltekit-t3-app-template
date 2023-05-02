import { z } from "zod"

import prisma from "$lib/prisma"
import { logger } from "$lib/trpc/middleware/logger"
import { t } from "$lib/trpc/t"

export const posts = t.router({
  getUserId: t.procedure
    .use(logger)
    .input(z.string().email())
    .query(({ input }) => {
      return prisma.user.findUnique({
        where: {
          email: input,
        },
      })
    }),
  list: t.procedure
    .use(logger)
    .input(z.string())
    .query(({ input }) => {
      return prisma.post.findMany({
        where: {
          authorId: input,
        },
      })
    }),
  create: t.procedure
    .use(logger)
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        authorId: z.string(),
      })
    )
    .mutation(({ input }) => {
      return prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
          authorId: input.authorId,
        },
      })
    }),
})
