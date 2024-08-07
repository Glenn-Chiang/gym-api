import { pgTable, serial, text, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique()
})

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
