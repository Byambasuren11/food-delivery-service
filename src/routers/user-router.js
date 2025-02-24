import express from "express"
import userCreate from "../controller/user-create";

export const userRouter= express.Router()

userRouter.post("/", userCreate);