import { showOne } from '$lib/server/bread'

export async function load() {
  const dataa = await showOne()
  return { dataa }
}