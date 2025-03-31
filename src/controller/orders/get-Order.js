import { FoodOrder } from "../../models/foodOrder.model.js";

const GetOrder = async (req, res) => {
  try {
    const order = await FoodOrder.find({});
    res.status(200).json({
      success: true,
      data: order,
      message: `Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: `Internal Error ${error}` });
  }
};
export default GetOrder;
