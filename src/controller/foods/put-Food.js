import { Food } from "../../models/food.model.js";
import mongoose from "mongoose";

export const updateFood = async (req, res) => {
  const { id, foodName, price, image, ingredients } = req.body;
  //   console.log(id);
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(`${id}`) },
      { foodName, price, image, ingredients },
      { new: true }
    );
    console.log(updatedFood);
    res.status(200).json({
      success: true,
      message: `Successfully find the food with ${id}`,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: true, message: "Internal Error" });
  }
};
