import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';

dotenv.config();

const mongoURI = process.env.MONGO;
mongoose.connect(mongoURI)
  .then(() => {
    console.log("Mongodb is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();


app.use('/api/user', userRoutes)


app.listen(3000, () => {
  console.log("Server is Running on Port 3000!");
});

