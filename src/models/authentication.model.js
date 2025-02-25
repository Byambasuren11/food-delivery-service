import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String },
  phoneNumber: { type: Number, require: true },
  address: { type: String },
  role: {
    type: String,
    require: true,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  isVerified: { type: Boolean },
});
export const Users = mongoose.model("Users", usersSchema);
