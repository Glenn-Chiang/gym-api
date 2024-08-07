import { app } from "./app.js";
import { config } from "../config.js";

const startMessage = `Server listening on port: ${config.port}`

app.listen(config.port, () => console.log(startMessage));
