import express from "express";
import AddCategory from "../controller/categories/post-Category.js";

export const categoryRouter = express.Router();

categoryRouter.post("/", AddCategory);
