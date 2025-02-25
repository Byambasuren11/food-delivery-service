import express from "express";
import userCreate from "../controller/users/user-create.js";
import getUser from "../controller/users/Get-User.js";

export const userRouter = express.Router();

userRouter.post("/", userCreate);
userRouter.get("/", getUser);
