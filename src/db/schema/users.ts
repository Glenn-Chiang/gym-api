import {
  pgTable,
  serial,
  text
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

const createSchema = createInsertSchema(users);

const updateNameSchema = createSchema.pick({ name: true });

export default {
  create: createSchema,
  updateName: updateNameSchema,
};
