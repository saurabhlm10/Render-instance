import dotenv from "dotenv";

dotenv.config();

import express from "express";
import connectToDb from "./config/db";
import { port } from "./server";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function _wait(n: number) {
  return new Promise(resolve => setTimeout(resolve, n))
}

app.get('/', async (req, res) => {
  // await _wait(3000)
  // for (let i = 0; i < 5000000000; i++) { }
  res.send(`Running on` + port)
})

// connectToDb();

export default app;
