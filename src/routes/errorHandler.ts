import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError.js";
import { StatusCodes } from "http-status-codes";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err instanceof CustomError ? err.statusCode : StatusCodes.INTERNAL_SERVER_ERROR

  return res.status(statusCode).json({error: err.message})
}
