import express from "express";
import PostOrder from "../controller/orders/post-Order.js";
import GetOrder from "../controller/orders/get-Order.js";

export const OrderRouter = express.Router();

OrderRouter.post("/", PostOrder);
OrderRouter.get("/", GetOrder);
