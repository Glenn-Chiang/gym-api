import dotenv from "dotenv";

// In development, read environment variables from .env file
if (process.env.NODE_ENV === "development") {
  dotenv.config() 
}

export const config = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,

  dbConfig: {
    user: process.env.PGUSER || "postgres",
    password: process.env.PGPASSWORD || "password",
    host: process.env.PGHOST || "localhost",
    port: Number(process.env.PGPORT) || 3000,
    database: process.env.PGDATABASE || "postgres",
    ssl: false
  }
};
