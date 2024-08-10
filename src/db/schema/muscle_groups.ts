import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { exercisesToMuscleGroups } from "./exercises_to_muscle_groups.js";

export const muscleGroups = pgTable("muscle_groups", {
  id: serial("id").primaryKey(),
  name: text("name").primaryKey(),
});

export type MuscleGroup = typeof muscleGroups.$inferSelect;
export type NewMuscleGroup = typeof muscleGroups.$inferInsert;

export const muscleGroupsRelations = relations(muscleGroups, ({ many }) => ({
  exercisesToMuscleGroups: many(exercisesToMuscleGroups),
}));
