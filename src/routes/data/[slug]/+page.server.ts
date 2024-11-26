import { z } from "zod";
import { show } from '$lib/server/bread'

export async function load({ params }) {
  const shema = z.number()
  try {
    const fff = shema.parse(Number(params.slug))
    const dat = await show(fff)
    return dat
  } catch (e) {
    console.error(e)
  }
}