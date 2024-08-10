import { db } from "../db.js";
import { exercises, NewExercise } from "../schema/exercises.js";

export async function seedExercises() {
  await db.insert(exercises).values(exercisesData)
}

const exercisesData: NewExercise[] = [
  {
    name: "bench press"
  },
  {
    name: "overhead press",
    altNames: [
      "shoulder press",
      "military press"
    ]
  },
  {
    name: "bent-over row",
    altNames: [
      "barbell row"
    ]
  },
  {
    name: "squat"
  },
  {
    name: "deadlift"
  }
]
