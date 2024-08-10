import { pgTable, text } from "drizzle-orm/pg-core";

export const muscleGroups = pgTable("muscle_groups", {
  name: text("name").primaryKey()

})

export type MuscleGroup = typeof muscleGroups.$inferSelect;
export type NewMuscleGroup = typeof muscleGroups.$inferInsert;