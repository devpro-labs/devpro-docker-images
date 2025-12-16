import express from "express";
import { Request } from "express";

const app = express();

app.get("/", (req: Request, res) => {
  res.json({"data": "Devpro express server"});
});

app.listen(3000, () => console.log("Base Express running at http://localhost:3000"));
