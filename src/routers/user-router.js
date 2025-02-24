import express from "express"
import userCreate from "../controller/user-create.js";

export const userRouter= express.Router()

userRouter.post("/", userCreate);