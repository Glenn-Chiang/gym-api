import { CustomError } from "./CustomError.js";

export const userNotFoundErr = new CustomError(404, "User not found");
