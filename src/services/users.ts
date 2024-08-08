import { NewUser, User } from "../db/schema/users.js";
import UserRepo from "../repositories/users.js";
import { CustomError } from "../errors/CustomError.js";
import { StatusCodes } from "http-status-codes";

const notFoundErr = new CustomError(StatusCodes.NOT_FOUND, "User not found");
const emailInUseErr = new CustomError(
  StatusCodes.CONFLICT,
  "Email already in use"
);

// Get all users
function getAll(): Promise<User[]> {
  return UserRepo.getAll();
}

// Get user by id
async function getById(id: number): Promise<User | undefined> {
  const user = await UserRepo.getById(id);
  if (!user) {
    throw notFoundErr;
  }
  return user;
}

// Get user by email
async function getByEmail(email: string): Promise<User | undefined> {
  const user = await UserRepo.getByEmail(email);
  if (!user) {
    throw notFoundErr;
  }
  return user;
}

// Add a user
async function add(user: NewUser): Promise<User | undefined> {
  const existingUser = await UserRepo.getByEmail(user.email);

  if (existingUser) {
    throw emailInUseErr;
  }

  return UserRepo.add(user);
}

// Update a user's name
async function updateName(
  id: number,
  newName: string
): Promise<User | undefined> {
  const user = await UserRepo.getById(id)
  if (!user) {
    throw notFoundErr;
  }

  return UserRepo.updateName(id, newName);
}

// Remove all users
async function removeAll(): Promise<void> {
  return UserRepo.removeAll();
}

// Remove a user
async function remove(id: number): Promise<void> {
  const user = await UserRepo.getById(id)
  if (!user) {
    throw notFoundErr;
  }
  UserRepo.remove(id);
}

export default {
  getAll,
  getById,
  getByEmail,
  add,
  updateName,
  removeAll,
  remove,
};
