import { StatusCodes } from "http-status-codes";
import { AnyZodObject, z } from "zod";
import { CustomError } from "../errors/CustomError.js";

// Validates given data against given schema
export function validateData<T extends AnyZodObject>(data: unknown, schema: T, errorMessage: string): z.infer<T> {
    const result = schema.safeParse(data);

    if (!result.success) {
      const errorDetails = result.error.format()
      throw new CustomError(StatusCodes.BAD_REQUEST, errorMessage + ': ' + errorDetails);
    } 

    return result.data
}

export function validateId(id: string): number {
  const result = z.coerce.number().safeParse(id)
  
  if (!result.success) {
    const errorDetails = result.error.format()
    throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid id: " + errorDetails)
  }

  return result.data
}
