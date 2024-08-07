import { defineConfig } from "drizzle-kit"
import { config } from "./config.js"

export default defineConfig({
  schema: './src/db/schema',
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: config.dbCredentials
})
