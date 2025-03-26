import express from "express";
import PostOrder from "../controller/orders/post-Order.js";

export const OrderRouter = express.Router();

OrderRouter.post("/", PostOrder);
