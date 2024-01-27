import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO;

console.log(mongoURI)
mongoose.connect(mongoURI)
  .then(() => {
    console.log("Mongodb is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is Running on Port 3000!");
});
