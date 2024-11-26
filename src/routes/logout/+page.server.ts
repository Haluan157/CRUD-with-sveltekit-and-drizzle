import { redirect } from '@sveltejs/kit'

export const actions = {
  default: ({ cookies }) => {
    cookies.delete("user", {
      path: "/"
    })
    redirect(303, "/")
  }
}