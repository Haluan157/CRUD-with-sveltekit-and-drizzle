import { show } from '$lib'

export async function load() {
  let dataa = await show()
  return { dataa }
}