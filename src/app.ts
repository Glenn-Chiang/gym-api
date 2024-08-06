import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "./config";
import { usersRouter } from "./routes/users";
import { errorHandler } from "./routes/errorHandler";

const app = express();

// Basic middleware setup
app.use(cors());
app.use(express.json());

// Log requests in dev mode
if (config.nodeEnv === "development") {
  app.use(morgan("dev"));
}

app.use(usersRouter)

// Global error handler
app.use(errorHandler)

export { app }
