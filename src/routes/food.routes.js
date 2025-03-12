import express from "express";
import AddFood from "../controller/foods/post-Food.js";
import deleteFood from "../controller/foods/delete-Food.js";
import updateFood from "../controller/foods/put-Food.js";
import { validateFoodName } from "../middleware/foods/validateFoodName.js";
import GetFood from "../controller/foods/get-Food.js";

export const foodRouter = express.Router();

foodRouter.post("/", validateFoodName, AddFood);
foodRouter.delete("/:foodId", deleteFood);
foodRouter.put("/:foodId", updateFood);
foodRouter.get("/", GetFood);
