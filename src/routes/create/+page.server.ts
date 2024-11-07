import { fail, redirect } from '@sveltejs/kit';
import { z } from "zod";
import { create } from '$lib'

export function load({ cookies }) {
  if (!cookies.get("user"))  {
    redirect(302, "/")
  }
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const breads = z.object({
      bread: z.string().trim().max(77),
      price: z.number().min(500),
      stock: z.number().min(0),
      description: z.string().trim().nullable(),
    });
    try {
      const dy = breads.parse({
        bread: data.get("bread"),
        price: parseInt(data.get("price")),
        stock: parseInt(data.get("stock")),
        description: data.get("description")
      })
      if (dy.bread) {
        await create(dy)
      } else {
        throw new Error("Salah data!!!")
      }
    } catch (e) {
      return fail(400, { error: "Input data tidak valid!" })
    }
  }
}