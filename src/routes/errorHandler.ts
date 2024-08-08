import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError.js";
import { StatusCodes } from "http-status-codes";
import { config } from "../../config.js";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err instanceof CustomError ? err.statusCode : StatusCodes.INTERNAL_SERVER_ERROR
  const details = err instanceof CustomError ? err.details : {}
  
  if (config.nodeEnv === 'development') {
    console.log({
      status: statusCode,
      error: err.message,
      details
    })
  }

  return res.status(statusCode).json({error: err.message, details})
}
