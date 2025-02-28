import express from "express";
import AddCategory from "../controller/categories/post-Category.js";
import deleteCategory from "../controller/categories/delete-Category.js";
import updateCategory from "../controller/categories/put-Category.js";
import getCategory from "../controller/categories/get-Category.js";

export const categoryRouter = express.Router();

categoryRouter.post("/", AddCategory);
categoryRouter.delete("/:foodCategoryId", deleteCategory);
categoryRouter.put("/:foodCategoryId", updateCategory);
categoryRouter.get("/", getCategory);
