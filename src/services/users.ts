import { userNotFoundErr } from "../errors/users.js";
import { User } from "../models/user.js";
import UserRepo from "../repositories/users.js";

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
    throw userNotFoundErr
  }
}

// Add a user
async function add(user: User): Promise<void> {}

// Remove all users
async function removeAll(): Promise<void> {}

// Remove a user
async function remove(id: number): Promise<void> {
  if (!UserRepo.getById(id)) {
    throw userNotFoundErr
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
