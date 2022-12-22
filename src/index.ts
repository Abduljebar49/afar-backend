import { AppDataSource } from "./data-source";
import * as express from "express";
import { router } from "./routes/contractor";
import { lookUpRouter } from "./routes/lookup";
import { Consrouter } from "./routes/consultant";
// import dotenv from 'dotenv';

// dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;
AppDataSource.initialize()
  .then(async () => {
    app.use(router);
    app.use(lookUpRouter);
    app.use(Consrouter);
    app.listen(3000, console.log("listening on port 3000"));
  })
  .catch((error) => console.log(error));
