import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: mongoose.Types.ObjectId, ref: "food-category" },
  ingredients: {
    type: String,
    required: true,
  },
});
export const Food = mongoose.model("food", foodSchema);
