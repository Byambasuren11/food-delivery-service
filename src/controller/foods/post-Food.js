import { Food } from "../../models/food.model.js";

const AddFood = async (req, res) => {
  try {
    const { foodName, price, image, ingredients } = req.body;

    const newFood = await Food.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
    });
    res.send(newFood);
  } catch (error) {
    res.status(400).send("");
  }
};
export default AddFood;
