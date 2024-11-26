import { fail, error } from '@sveltejs/kit';
import { z } from "zod";
import { create } from '$lib/server/bread'
import type { Rd } from '$lib/types'

export function load({ cookies }) {
  const cookie = cookies.get("user")
  if (!cookie)  {
    error(401, "Login dulu bang...")
  }
}

const breads = z.object({
  bread: z.string().trim().max(77),
  price: z.number().min(500),
  stock: z.number().min(0),
  description: z.string().trim().nullable(),
  author: z.string().trim().max(255)
});

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData()
    const { name } = JSON.parse(cookies.get("user"))
    try {
      const dy: Rd = {
        bread: data.get("bread") as string,
        price: parseInt(data.get("price") as string),
        stock: parseInt(data.get("stock") as string),
        description: data.get("description") as string,
        author: name
      }
      const yd = breads.parse(dy)
      if (yd.bread && yd.author) {
        await create(yd)
      } else {
        throw new Error("Salah data!!!")
      }
    } catch (e) {
      return fail(400, { error: "Database Error"})
    }
  }
}