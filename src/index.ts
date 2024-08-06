import { app } from "./app";
import { config } from "./config";

const startMessage = `Server listening on port: ${config.port}`

app.listen(config.port, () => console.log(startMessage));
