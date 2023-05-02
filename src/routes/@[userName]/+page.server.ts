import { error } from "@sveltejs/kit"

import prisma from "$lib/prisma"

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const user = prisma.user.findMany({
    where: {
      name: params.userName,
    },
  })

  if (user) {
    const posts = prisma.post.findMany({
      where: {
        authorId: user.id,
      },
    })
    return {
      posts,
    }
  }

  throw error(404, "Not found")
}
