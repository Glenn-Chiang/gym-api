import { CustomError } from "../errors/CustomError";
import { USER_NOT_FOUND_ERR } from "../errors/users";
import { User } from "../models/user";
import UserRepo from "../repositories/users";

// Get all users
function getAll(): Promise<User[]> {
  return UserRepo.getAll();
}

// Get user by id
async function getById(id: number): Promise<User | null> {
  const user = UserRepo.getById(id);
  if (user) {
    return user
  } else {
    throw USER_NOT_FOUND_ERR
  }
}

// Add a user
async function add(user: User): Promise<void> {}

// Remove all users
async function removeAll(): Promise<void> {}

// Remove a user
async function remove(id: number): Promise<void> {
  if (!UserRepo.getById(id)) {
    throw USER_NOT_FOUND_ERR
  }
  UserRepo.remove(id)
}

export default {
  getAll,
  getById,
  add,
  removeAll,
  remove,
};
