import express, { Request, Response, Application } from "express";
import User from "../models/user";
const app: Application = express();

const getLastId = async (): Promise<number> => {
  try {
    const result: any = await User.find().sort({ _id: -1 }).limit(1);
    if (result.length === 0) {
      return 1;
    } else {
      let _id = result[0]._id;
      _id++;
      return _id;
    }
  } catch (e) {
    console.log("Error while getting last Last ID.", e);
    return e;
  }
};

app
  .get("/", async (req: Request, res: Response) => {
    try {
      const users: any = await User.find();
      res.json(users);
    } catch (e) {
      res.status(201).end();
    }
  })
  .get("/:_id", async (req: Request, res: Response) => {
    try {
      const _id: number = parseInt(req.params._id);
      const user: any = await User.findById({ _id });
      res.json(user);
    } catch (e) {
      res.status(400).end();
    }
  })
  .post("/", async (req: Request, res: Response) => {
    try {
      const _id: number = await getLastId();
      const { name, phone_number, email, password } = req.body;
      const user: any = await User.create({
        _id,
        name,
        phone_number,
        email,
        password,
      });
      res.json(user).status(201).end();
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  })
  .put("/:_id", async (req: Request, res: Response) => {
    try {
      const _id: number = parseInt(req.params._id);
      const { name, phone_number, email, password } = req.body;
      const user: any = await User.updateOne(
        {
          _id,
        },
        { name, phone_number, email, password }
      );
      res.json(user);
    } catch (e) {
      res.status(201).end();
    }
  })
  .delete("/:_id", async (req: Request, res: Response) => {
    try {
      const _id: number = parseInt(req.params._id);
      const user: any = await User.deleteOne({ _id });
      res.json(user);
    } catch (e) {
      res.status(201).end();
    }
  });

export default app;
