import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { userRouter } from "./routes/user.routes.js";
import { AuthenticationRouter } from "./routes/authentication.routes.js";
import { categoryRouter } from "./routes/category.routes.js";
import { foodRouter } from "./routes/food.routes.js";
import { OrderRouter } from "./routes/order.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
const port = 4007;

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

app.use("/user", userRouter);
app.use("/auth", AuthenticationRouter);
app.use("/food-category", categoryRouter);
app.use("/food", foodRouter);
app.use("/food-order", OrderRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
