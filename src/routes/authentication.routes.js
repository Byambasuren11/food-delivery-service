import express from "express";
import validateLogin from "../middleware/authentication/FirstLoginInputCheck.js";
import loginUser from "../middleware/authentication/SecondLoginInputCheck.js";
export const AuthenticationRouter = express.Router();

AuthenticationRouter.post("/login", validateLogin, loginUser);
