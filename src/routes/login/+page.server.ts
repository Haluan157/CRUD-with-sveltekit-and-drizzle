import { fail, redirect } from '@sveltejs/kit'
import { login } from '$lib/server/login'
import { z } from 'zod'

class InvalidError extends Error {
  constructor(nam: string) {
    super(nam)
    this.name = "custom"
  }
}

export function load({ cookies, url }) {
  if (cookies.get("user")) {
    redirect(302, "/")
  } else {
    const a = url.searchParams.has('l')
    return { a }
  }
}

const schema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8)
})

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData()
    try {
      const dy = schema.parse({
        email: data.get("email") as string,
        password: data.get("pass") as string
      })
      const check = await login(dy)
      if (typeof check === "object") {
      cookies.set("user", JSON.stringify(check), {
          path: "/",
          maxAge: 3600,
          httpOnly: true,
          sameSite: "strict"
        })
      redirect(303, "/")
      } else {
        throw new InvalidError("Salah")
      }
    } catch (e) {
      if (e instanceof InvalidError)
        return fail(400, {error: "Invalid email atau password"})
    }
  }
}