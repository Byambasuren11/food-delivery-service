import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "food-category",
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
});
export const Food = mongoose.model("food", foodSchema);
