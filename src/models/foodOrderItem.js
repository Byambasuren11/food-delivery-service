import mongoose from "mongoose";

const foodOrderItemsSchema = new mongoose.Schema({
  quantity: { type: Number },
});
export const Users = mongoose.model("foodOrderId", foodOrderItemsSchema);
