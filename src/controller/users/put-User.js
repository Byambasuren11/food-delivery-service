import mongoose from "mongoose";
import { Users } from "../../models/users.model.js";

export const updateUser = async (req, res) => {
  const { _id, email, password, address } = req.body;
  //   console.log(id);
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(`${_id}`) },
      { email, password, address },
      { new: true }
    );
    console.log(updatedUser);
    res.status(200).json({
      success: true,
      message: `Successfully update with ${_id}`,
      updatedUser: updatedUser,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: true, message: "Internal Error" });
  }
};

