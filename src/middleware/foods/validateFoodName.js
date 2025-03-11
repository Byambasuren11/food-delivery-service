import { Food } from "../../models/food.model.js";

export const validateFoodName = async (req, res, next) => {
  try {
    const { foodName } = req.body;
    const foodNameCheck = await Food.findOne({ foodName });
    if (!foodNameCheck) {
      next();
    } else {
      res.status(400).json({ error: true, message: "Already have a food" });
    }
  } catch (error) {}
};
