import express from "express";
import { Router } from "express";
import authRoute from "./src/routes/authRoute.js";

const app = express();

app.use(express.json())

app.use('/api/auth', authRoute);


app.get('/', (req, res) => {
  res.send("Hello World");
})

// Error Handlers

export default app;