import express from "express";
import AddFood from "../controller/foods/post-Food.js";

export const foodRouter = express.Router();

foodRouter.post("/", AddFood);
