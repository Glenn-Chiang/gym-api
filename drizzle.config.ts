import { defineConfig } from "drizzle-kit"
import dotenv from "dotenv";
dotenv.config()

export default defineConfig({
  schema: './src/db/schema/*',
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    user: process.env.PGUSER!,
    password: process.env.PGPASSWORD!,
    host: process.env.PGHOST!,
    port: Number(process.env.PGPORT!),
    database: process.env.PGDATABASE!,
    ssl: false
  }
})
