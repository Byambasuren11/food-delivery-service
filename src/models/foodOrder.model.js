import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  user: { type: String, require: true },
  totalPrice: { type: Number, require: true },
  foodOrderItems: { type: String },
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
  },
});
export const Users = mongoose.model("food-order", foodOrderSchema);
