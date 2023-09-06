import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./router/studentrouter.js";
import morgan from "morgan";
import cors from "cors";
import router from "./router/studentrouter.js";
dotenv.config();


app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/student", route);


mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to Database");
  } catch (err) {
    console.log(err);
  }
};
app.listen(5000, () => {
  connect();
  console.log("Server is running");
});
