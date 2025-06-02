import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { userRouter } from "./src/routes/user.routes.js";
import { AuthenticationRouter } from "./src/routes/authentication.routes.js";
import { categoryRouter } from "./src/routes/category.routes.js";
import { foodRouter } from "./src/routes/food.routes.js";
import { OrderRouter } from "./src/routes/order.routes.js";

const url =
  "mongodb+srv://Byambasuren11:80664525Bn$@cluster0.veh63.mongodb.net/Users?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("successful");
  } catch (error) {
    console.log(error);
  }
};

connectDb();
const app = express();
app.use(express.json());
app.use(cors());
const port = 4007;

app.use("/user", userRouter);
app.use("/auth", AuthenticationRouter);
app.use("/food-category", categoryRouter);
app.use("/food", foodRouter);
app.use("/food-order", OrderRouter);
console.log("this is working");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
