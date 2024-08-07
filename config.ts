import dotenv from "dotenv";
dotenv.config()

export const config = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: process.env.PORT,

  dbCredentials: {
    user: process.env.PGUSER!,
    password: process.env.PGPASSWORD!,
    host: process.env.PGHOST!,
    port: Number(process.env.PGPORT!),
    database: process.env.PGDATABASE!
  }
};
