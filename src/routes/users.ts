import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import UserSchema from "../db/schema/users.js";
import { validateData, validateId } from "../middleware/validation.js";
import UserService from "../services/users.js";

const router = Router();

// Get all users
router.get("/users", async (req, res, next) => {
  try {
    const users = await UserService.getAll();
    res.status(StatusCodes.OK).json(users);
  } catch (err) {
    next(err);
  }
});

// Get user by id
router.get("/users/:id", async (req, res, next) => {
  try {
    const userId = validateId(req.params.id);
    const user = await UserService.getById(userId);
    res.status(StatusCodes.OK).json(user);
  } catch (err) {
    next(err);
  }
});

// Create new user
router.post("/users", async (req, res, next) => {
  try {
    const userData = validateData(
      req.body,
      UserSchema.create,
      "Invalid user data"
    );
    const user = await UserService.add(userData);
    res.status(StatusCodes.CREATED).json(user);
  } catch (err) {
    next(err);
  }
});

// Update a user's name
router.patch("/users/:id/name", async (req, res, next) => {
  try {
    const userId = validateId(req.params.id)
    const newName = validateData(req.body, UserSchema.updateName, "Invalid name").name
    const user = await UserService.updateName(userId, newName);
    res.status(StatusCodes.OK).json(user)
  } catch (err) {
    next(err)
  }
})

// Remove all users
router.delete("/users", async (req, res, next) => {
  try {
    await UserService.removeAll();
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
});

// Remove a user
router.delete("/users/:id", async (req, res, next) => {
  try {
    const userId = validateId(req.params.id);
    await UserService.remove(userId);
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
});

export { router as usersRouter };
