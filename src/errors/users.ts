import { CustomError } from "./CustomError";

export const USER_NOT_FOUND_ERR = new CustomError(404, "User not found");
