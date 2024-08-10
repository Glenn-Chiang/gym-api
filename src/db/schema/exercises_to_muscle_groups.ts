import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { exercises } from "./exercises.js";
import { muscleGroups } from "./muscle_groups.js";
import { relations } from "drizzle-orm";

export const exercisesToMuscleGroups = pgTable(
  "exercises_to_muscle_groups",
  {
    exerciseId: integer("exercise_id")
      .notNull()
      .references(() => exercises.id),
    muscleGroupId: integer("muscle_group_id")
      .notNull()
      .references(() => muscleGroups.id),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.exerciseId, table.muscleGroupId],
    }),
  })
);

export const exercisesToMuscleGroupsRelations = relations(exercisesToMuscleGroups, ({one}) => ({
  exercise: one(exercises, {
    fields: [exercisesToMuscleGroups.exerciseId],
    references: [exercises.id]
  }),
  muscleGroup: one(muscleGroups, {
    fields: [exercisesToMuscleGroups.muscleGroupId],
    references: [muscleGroups.id]
  })
}))