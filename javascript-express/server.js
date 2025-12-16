import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Base Node Express App!");
});

app.listen(3000, () => console.log("Base Express running at http://localhost:3000"));
