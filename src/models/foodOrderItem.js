import mongoose from "mongoose";

const foodOrderItemsSchema = new mongoose.Schema({
  food: { type: mongoose.Types.ObjectId, ref: "food" },
  quantity: { type: Number },
});
export const FoodOrderId = mongoose.model("foodOrderId", foodOrderItemsSchema);
