import { User } from "../models/user";

// Get all users
async function getAll(): Promise<User[]> {
  return []
}

// Get user by id. If there is no match, return null.
async function getById(id: number): Promise<User | null> {
  return null
}

// Add a user
async function add(user: User): Promise<void> {

}

// Remove all users
async function removeAll(): Promise<void> {
  
}

// Remove a user
async function remove(id: number): Promise<void> {
  
}

export default {
  getAll, getById, add, removeAll, remove
}
