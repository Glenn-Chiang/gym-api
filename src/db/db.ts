import pg from "pg";
import {drizzle} from "drizzle-orm/node-postgres"
import { users } from "./schema/users.js";
import { exercises, exercisesRelations } from "./schema/exercises.js";
import { config } from "../../config.js";
import { exercisesToMuscleGroups, exercisesToMuscleGroupsRelations } from "./schema/exercises_to_muscle_groups.js";
import { muscleGroups, muscleGroupsRelations } from "./schema/muscle_groups.js";

const client = new pg.Client(config.dbConfig) 

await client.connect()

export const db = drizzle(client, {
  schema: {
    users,
    exercises,
    exercisesRelations,
    muscleGroups,
    muscleGroupsRelations,
    exercisesToMuscleGroups,
    exercisesToMuscleGroupsRelations
  }
})
