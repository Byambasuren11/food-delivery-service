import express from "express";
import getUser from "../controller/users/get-User.js";
import deleteUser from "../controller/users/delete-User.js";
import postUser from "../controller/users/post-User.js";
import { validateEamilAndPassword } from "../middleware/authentication/validateEamilAndPssword.js";
import { Users } from "../models/users.model.js";

export const userRouter = express.Router();

const validateUserEmailExist = async (req, res, next) => {
  const { email } = req.body;
  try {
    const newUser = await Users.findOne({
      email,
    });
    if (!newUser) {
      next();
    } else {
      res
        .status(400)
        .json({ error: true, message: "You already have account" });
    }
  } catch (error) {
    res.status(500).json({ error: true, message: "Internal Error" });
  }
};

userRouter.post(
  "/",
  validateEamilAndPassword,
  validateUserEmailExist,
  createUser
);
// userRouter.get("/", getUser);
// userRouter.delete("/", deleteUser);
