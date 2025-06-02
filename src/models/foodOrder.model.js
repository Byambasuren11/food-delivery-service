import mongoose, { now } from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "Users", required: true },
  totalPrice: { type: Number, required: true },
  foodOrderItems: [
    {
      food: { type: mongoose.Types.ObjectId, ref: "food", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
  createdAt: { type: Date, default: now },
});
export const FoodOrder = mongoose.model("food-order ", foodOrderSchema);
