export const load = ({ cookies }) => {
  const a = cookies.get("user") ? true : false
  return { a }
}