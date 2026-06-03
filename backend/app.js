import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send("Hello World");
})

// Middleware

// Routes

// Error Handlers

export default app;