import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event: any) => {
  return {
    session: await event.locals.getSession(),
  }
}
