import { eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { Exercise, exercises } from "../db/schema/exercises.js";

// Get all exercises
async function getAll(): Promise<Exercise[]> {
  const records = await db.query.exercises.findMany({
    with: {
      exercisesToMuscleGroups: {
        columns: {},
        with: {
          muscleGroup: true,
        },
      },
    },
  });

  return records.map((record) => {
    const { exercisesToMuscleGroups, ...exercise } = record;
    return {
      ...exercise,
      muscleGroups: record.exercisesToMuscleGroups.map(
        (relation) => relation.muscleGroup
      ),
    };
  });
}

// Get exercise by id
async function getById(id: number): Promise<Exercise | undefined> {
  const record = await db.query.exercises.findFirst({
    where: eq(exercises.id, id),
    with: {
      exercisesToMuscleGroups: {
        columns: {},
        with: {
          muscleGroup: true,
        },
      },
    },
  });

  if (!record) return undefined;

  const { exercisesToMuscleGroups, ...exercise } = record;
  return {
    ...exercise,
    muscleGroups: record.exercisesToMuscleGroups.map(
      (relation) => relation.muscleGroup
    ),
  };
}

export default {
  getAll,
  getById,
};
