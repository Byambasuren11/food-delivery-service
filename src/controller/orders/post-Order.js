import { FoodOrder } from "../../models/foodOrder.model.js";

export const PostOrder = async (req, res) => {
  try {
    const { totalPrice, foodOrderItems, user } = req.body;

    const newOrder = await FoodOrder.create({
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
      user: user,
    });
    res.status(200).json({
      success: true,
      message: `Successfully create ${foodOrderItems}`,
      newOrder: newOrder,
    });
  } catch (error) {
    res
      .status(400)
      .send({ error: true, message: `"Internial error" ${error}` });
  }
};
