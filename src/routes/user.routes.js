import express from "express";
import { Users } from "../models/users.model.js";
import { deleteUser } from "../controller/users/delete-User.js";
import { validateEmailAndPassword } from "../middleware/authentication/validateEmailAndPssword.js";
import { loginUser } from "../controller/users/create-User.js";
import { validateEmail } from "../middleware/authentication/validateEmail.js";
import { updateUser } from "../controller/users/put-User.js";

export const userRouter = express.Router();

export const getUser = async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json({
      success: true,
      data: users,
      message: `Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Error" });
  }
};

userRouter.post("/", validateEmailAndPassword, validateEmail, loginUser);
// userRouter.post("/", validateEmailAndPassword, loginUser);
userRouter.get("/", getUser);
userRouter.delete("/", deleteUser);
userRouter.put("/", updateUser);
