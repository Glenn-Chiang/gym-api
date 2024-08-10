import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { exercisesToMuscleGroups } from "./exercises_to_muscle_groups.js";

export const exercises = pgTable("exercises", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  altNames: text("alt_names").array(),
  imageUrl: text("image_url"),
});

export type Exercise = typeof exercises.$inferSelect;
export type NewExercise = typeof exercises.$inferInsert;

export const exercisesRelations = relations(exercises, ({ many }) => ({
  exercisesToMuscleGroups: many(exercisesToMuscleGroups),
}));
