import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError.js";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err instanceof CustomError ? err.statusCode : 500

  return res.status(statusCode).json({error: err.message})
}
