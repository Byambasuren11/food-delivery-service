import { Food } from "../../models/food.model.js";
import mongoose from "mongoose";

export const deleteFood = async (req, res) => {
  const { id } = req.body;
  try {
    const deletedFood = await Food.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(`${id}`),
    });

    if (!deletedFood) {
      res.status(400).json({ error: true, message: "Not Found" });
    } else {
      res.status(200).json({
        success: true,
        message: `Successfully delete the food with ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Error" });
  }
};
