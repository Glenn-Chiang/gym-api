import { eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { NewUser, User, users } from "../db/schema/users.js";

// Get all users
async function getAll(): Promise<User[]> {
  return db.select().from(users);
}

// Get user by id
async function getById(id: number): Promise<User | undefined> {
  return (await db.select().from(users).where(eq(users.id, id))).at(0);
}

// Get user by email
async function getByEmail(email: string): Promise<User | undefined> {
  return (await db.select().from(users).where(eq(users.email, email))).at(0);
}

// Add a user
async function add(user: NewUser): Promise<User | undefined> {
  return (await db.insert(users).values(user).returning()).at(0);
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
  add,
  removeAll,
  remove,
};
