import mongoose, { now } from "mongoose";

const usersSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  address: { type: String },
  orderedFoods: { type: mongoose.Types.ObjectId, ref: "food" },
  role: {
    type: String,
    required: true,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  isVerified: { type: Boolean, default: now },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});
export const Users = mongoose.model("Users", usersSchema);
