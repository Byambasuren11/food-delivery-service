import { Food } from "../../models/food.model.js";

export const GetFood = async (req, res) => {
  try {
    const food = await Food.find({});
    res.status(200).json({
      success: true,
      data: food,
      message: `Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: `Internal Error ${error}` });
  }
};
