import mongoose from "mongoose";
import { Users } from "../../schemas/user-schema.js";
const uri =
  "mongodb+srv://Byambasuren11:80664525Bn$@cluster0.veh63.mongodb.net/Users?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("successful");
  } catch (error) {
    console.log(error);
  }
};
connectDb();

const userCreate= async (req, res) => {
    const { email,password } = req.body;
    try {
      const newUser = await Users.create({
        email: email,
        password:password
      });
      res.send(newUser);
    } catch (error) {
      res.status(400).send("");
    }
  };
  export default userCreate