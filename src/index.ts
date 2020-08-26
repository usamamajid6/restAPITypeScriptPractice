import express, { Application, Request, Response } from "express";
import connnectToDb from "./connectToDB";
const app: Application = express();

import user from "./routes/users";
app.use(express.json());
app.use("/user", user);

app.get("/", (req: Request, res: Response) => {
  res.send("Assalam o Alikum!");
});

app.listen(2222, () => console.log("Server Is Running!"));
connnectToDb();
