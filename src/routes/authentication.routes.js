import express from "express";
import { validateEmailAndPassword } from "../middleware/authentication/validateEmailAndPssword.js";
import { loginUser } from "../controller/users/create-User.js";
import { validateEmail } from "../middleware/authentication/validateEmail.js";
export const AuthenticationRouter = express.Router();

AuthenticationRouter.post("/login", validateEmailAndPassword, loginUser);
