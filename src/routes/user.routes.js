import express from "express";
import getUser from "../controller/users/get-User.js";
import deleteUser from "../controller/users/delete-User.js";
import postUser from "../controller/users/user-create.js";

export const userRouter = express.Router();

userRouter.post("/", postUser, );
userRouter.get("/", getUser);
userRouter.delete("/", deleteUser);
