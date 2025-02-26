import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "Users", required: true },
  totalPrice: { type: Number, required: true },
  foodOrderItems: [{ type: mongoose.Types.ObjectId, ref: "foodOrderId" }],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
  },
});
export const FoodOrder = mongoose.model("food-order ", foodOrderSchema);
