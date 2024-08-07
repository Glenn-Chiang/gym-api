import { Client } from "pg";
import {drizzle} from "drizzle-orm/node-postgres"

const client = new Client() // Database client is automatically initialized with environment variables

await client.connect()

export const db = drizzle(client)
