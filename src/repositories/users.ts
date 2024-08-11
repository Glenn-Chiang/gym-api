import { eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { NewUser, User, users } from "../db/schema/users.js";

// Get all users
async function getAll(): Promise<User[]> {
  return db.select().from(users);
}

// Get user by id
async function getById(id: number): Promise<User | undefined> {
  return (await db.select().from(users).where(eq(users.id, id)).limit(1))[0];
}

// Get user by email
async function getByEmail(email: string): Promise<User | undefined> {
  return (await db.select().from(users).where(eq(users.email, email)).limit(1))[0];
}

// Add a user
async function create(user: NewUser): Promise<User | undefined> {
  return (await db.insert(users).values(user).returning())[0];
}

// Update a user's name and return the updated user
async function updateName(id: number, newName: string): Promise<User | undefined> {
  return (await db.update(users).set({name: newName}).where(eq(users.id, id)).returning())[0];
}

// Remove all users
async function removeAll(): Promise<void> {
  db.delete(users);
}

// Remove a user by id
async function remove(id: number): Promise<void> {
  db.delete(users).where(eq(users.id, id));
}

export default {
  getAll,
  getById,
  getByEmail,
  create,
  updateName,
  removeAll,
  remove,
};
