import { Client } from "pg";
import {drizzle} from "drizzle-orm/node-postgres"
import { users } from "./schema/users.js";

const client = new Client() // Database client is automatically initialized with environment variables

await client.connect()

export const db = drizzle(client, {
  schema: {
    users
  }
})
