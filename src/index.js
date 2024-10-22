import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  return res.send("server is running");
});

connectDB();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
