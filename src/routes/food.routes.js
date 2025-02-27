import express from "express";
import AddFood from "../controller/foods/post-Food.js";
import deleteFood from "../controller/foods/delete-Food.js";
import updateFood from "../controller/foods/put-Food.js";

export const foodRouter = express.Router();

foodRouter.post("/", AddFood);
foodRouter.delete("/:foodId", deleteFood);
foodRouter.put("/:foodId", updateFood);
