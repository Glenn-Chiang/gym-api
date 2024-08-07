import { Router } from "express";
import UserService from "../services/users.js"
import { StatusCodes } from "http-status-codes";
import { CustomError } from "../errors/CustomError.js";
import { validate } from "../validation/validation.js";
import { insertUserSchema } from "../db/schema/users.js";

const router = Router()

// Get all users
router.get('/users', async (req, res, next) => {
  try {
    const users = await UserService.getAll();
    res.status(StatusCodes.OK).json(users)
  } catch (err) {
    next(err)
  }
})

// Get user by id
router.get('/users/:id', async (req, res, next) => {
  try {
    // TODO: Validate id
    const userId = Number(req.params.id);
    const user = await UserService.getById(userId);
    res.status(StatusCodes.OK).json(user)
  } catch (err) {
    next(err)
  }
})


// Create new user
router.post('/users', async (req, res, next) => {
  try {
    const userData = validate(req.body, insertUserSchema, "Invalid user data");
    const user = await UserService.add(userData)
    res.status(StatusCodes.CREATED).json(user)
  } catch (err) {
    next(err)
  }
})

export { router as usersRouter }
