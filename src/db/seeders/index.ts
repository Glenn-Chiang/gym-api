import { seedMuscleGroups } from "./muscle-groups.js";

async function seed() {
  await seedMuscleGroups()
}

seed()