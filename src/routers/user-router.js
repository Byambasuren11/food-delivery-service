import express from "express"
import userCreate from "../controller/users/user-create.js";

export const userRouter= express.Router()

userRouter.post("/", userCreate);