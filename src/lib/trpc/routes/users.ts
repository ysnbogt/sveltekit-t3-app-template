import prisma from "$lib/prisma"
import { logger } from "$lib/trpc/middleware/logger"
import { t } from "$lib/trpc/t"
import { z } from "zod"

export const users = t.router({
  list: t.procedure
    .use(logger)
    .input(z.string().optional())
    .query(({ input }) =>
      prisma.user
        .findMany({
          where: {
            name: {
              contains: input,
            },
          },
        })
        .then((users) =>
          users.map((user) => ({ email: user.email, name: user.name }))
        )
    ),
  create: t.procedure
    .use(logger)
    .input(
      z.object({
        email: z.string().email(),
        name: z.string().min(3).max(255),
      })
    )
    .query(({ input }) =>
      prisma.user.create({
        data: input,
      })
    ),
})
