import { eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { Exercise, exercises } from "../db/schema/exercises.js";
import { muscleGroups } from "../db/schema/muscle_groups.js";
import { exercisesToMuscleGroups } from "../db/schema/exercises_to_muscle_groups.js";

// Get all exercises
async function getAll(): Promise<Exercise[]> {
  return db.select().from(exercises);
}

// Get exercise by id
async function getById(id: number) {
  const exercise = await db.query.exercises.findFirst({
    where: eq(exercises.id, id),
    with: {
      exercisesToMuscleGroups: {
        // columns: {

        // },
        with: {
          muscleGroup: true
        }
      }
    }
  })

  return (
    await db
      .select({
        id: exercises.id,
        name: exercises.name,
        altNames: exercises.altNames,
        imageUrl: exercises.imageUrl,
        muscleGroups
      })
      .from(exercises)
      .leftJoin(exercisesToMuscleGroups, eq(exercises.id, exercisesToMuscleGroups.exerciseId))
      .leftJoin(muscleGroups, eq(muscleGroups.id, exercisesToMuscleGroups.muscleGroupId))
      .where(eq(exercises.id, id))
  )[0];
}

export default {
  getAll,
  getById,
};
