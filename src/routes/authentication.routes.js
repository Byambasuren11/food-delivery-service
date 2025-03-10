import express from "express";
import validateEamilAndPassword from "../middleware/authentication/validateEamilAndPssword.js";
import loginUser from "../middleware/authentication/SecondLoginInputCheck.js";
export const AuthenticationRouter = express.Router();

AuthenticationRouter.post(
  "/login",
  validateEamilAndPassword,
  validateLogin,
  loginUser
);
