import { redirect } from '@sveltejs/kit';
import { register } from '$lib/server/login'
import { z } from 'zod'
import bcrypt from 'bcrypt'

export const actions = {
  default: async ({ request }) => {
    const shm = z.object({
      name: z.string().max(30).trim(),
      email: z.string().email().trim(),
      password: z.string().min(8)
    })
      const dat = await request.formData()
      let create = shm.parse({
        name: dat.get("name") as string,
        email: dat.get("email") as string,
        password: dat.get("pass") as string
      })
      create.password = await bcrypt.hash(create.password, 10)
      await register(create)
      redirect(303, "/login?l=h")
  }
}