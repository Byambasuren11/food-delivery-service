import { FoodOrder } from "../../models/foodOrder.model.js";

const PostOrder = async (req, res) => {
  try {
    const { food, quantity } = req.body;

    const newOrder = await FoodOrder.create({
      food: food,
      quantity: quantity,
    });
    res.status(200).json({
      success: true,
      message: `Successfully update with ${food}`,
      newOrder: newOrder,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ error: true, message: `"Internial error" ${error}` });
  }
};
export default PostOrder;
