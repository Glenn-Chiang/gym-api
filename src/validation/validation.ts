import { NextFunction, Request, Response } from "express";
import { z, ZodError, AnyZodObject } from "zod";
import { CustomError } from "../errors/CustomError.js";
import { StatusCodes } from "http-status-codes";

// Validates given data against given schema
export function validate<T extends AnyZodObject>(data: unknown, schema: T, errorMessage: string): z.infer<T> {
    const result = schema.safeParse(data);

    if (!result.success) {
      const errorDetails = result.error.format()
      throw new CustomError(StatusCodes.BAD_REQUEST, errorMessage + ': ' + errorDetails);
    } 

    return result.data
}
