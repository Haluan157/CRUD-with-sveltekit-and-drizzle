import { fail, redirect } from '@sveltejs/kit'

export function load({ cookies }) {
  if (cookies.get("user")) {
    redirect(302, "/")
  }
}

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData()
    const dy = {
      email: data.get("email").trim(),
      passw: data.get("pass").trim()
    }
    try {
      if (dy.email === "admin@admin.com" && dy.passw === "1237") {
        cookies.set("user", "admin", {
          path: "/",
          maxAge: 3600,
          httpOnly: true,
          sameSite: "strict"
        })
        redirect(303, "/")
      } else {
        throw new Error("Salah")
      }
    } catch (e) {
      return fail(400, {error: "Invalid email atau password!"})
    }
  }
}