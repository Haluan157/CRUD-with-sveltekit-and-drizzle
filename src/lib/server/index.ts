import { drizzle } from "drizzle-orm/mysql2";
import { DATABASE_URL } from '$env/static/private'

const db = drizzle(DATABASE_URL);

export default db