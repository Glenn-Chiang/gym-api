import { db } from "../db.js";
import { muscleGroups, NewMuscleGroup } from "../schema/muscle_group.js";

export async function seedMuscleGroups(): Promise<void> {
  await db.insert(muscleGroups).values(muscleGroupsData);
}

const muscleGroupsData: NewMuscleGroup[] = [
  {
    name: "chest",
  },
  {
    name: "front delts",
  },
  {
    name: "rear delts",
  },
  {
    name: "traps",
  },
  {
    name: "lats",
  },
  {
    name: "lower back"
  },
  {
    name: "biceps",
  },
  {
    name: "triceps",
  },
  {
    name: "forearms",
  },
  {
    name: "quadriceps",
  },
  {
    name: "hamstrings",
  },
  {
    name: "calves",
  },
  {
    name: "glutes",
  },
  {
    name: "abs",
  },
];
