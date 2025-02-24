import cors from "cors";
import express from "express";
import { userRouter } from "./routers/user-router.js";
const app = express();
app.use(express.json());
app.use(cors());
const port = 4007;

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
