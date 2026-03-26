import express from "express";
import mongoose from "mongoose";
import pkg from "pg";
const { Client } = pkg;
import {createClient} from "redis";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "BASE_OK" });
});

app.get("/data", (req, res) => {
  res.json({ message: "Hello from BASE service" });
});

const PORT = process.env.PORT || 3000;

async function main() {
  console.log("Base service is starting...");

  //connect to mongodb
  await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connection successful");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);

    });

  //connect to postgresql
  const client = new Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
  });

  await client.connect();
  console.log("PostgreSQL connection successful");


  //connect to redis
  const redis = new createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  })
  console.log("Redis client created", redis);



  app.listen(PORT, () => {
    console.log(`Base service running on port ${PORT}`);
  });


}

main()
