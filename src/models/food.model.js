import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: { type: String, require: true },
  price: { type: Number },
  image: { type: String },
  ingredients: {
    type: String,
  },
  category: { type: Boolean },
});
export const Users = mongoose.model("food", foodSchema);
