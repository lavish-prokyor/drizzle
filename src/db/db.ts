import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
const pool = new Pool({
  connectionString: "postgres://postgres:Lavish@123@localhost:5432/sql"

});
const db = drizzle(pool);
 export {db};