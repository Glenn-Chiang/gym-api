import pg from "pg";
import {drizzle} from "drizzle-orm/node-postgres"
import { users } from "./schema/users.js";
import { config } from "../../config.js";

const client = new pg.Client(config.dbConfig) 

await client.connect()

export const db = drizzle(client, {
  schema: {
    users
  }
})
