import express from "express";
import {AddCategory} from "../controller/categories/post-Category.js";
import {deleteCategory} from "../controller/categories/delete-Category.js";
import {updateCategory} from "../controller/categories/put-Category.js";
import {getCategory} from "../controller/categories/get-Category.js";
import { validateCategoryName } from "../middleware/categories/categoryCheck.js";

export const categoryRouter = express.Router();

categoryRouter.post("/", validateCategoryName, AddCategory);
categoryRouter.put("/:id", updateCategory);
categoryRouter.get("/", getCategory);
