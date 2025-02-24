import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password:{type:String}
});
export const Users = mongoose.model("Users", usersSchema);