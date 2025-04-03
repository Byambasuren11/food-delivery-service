import { FoodOrder } from "../../models/foodOrder.model.js";
import { Users } from "../../models/users.model.js";

const GetOrder = async (req, res) => {
  try {
    const orders = await FoodOrder.find().populate("user", "name email"); // Populating user details if needed

    if (!orders || orders.length === 0) {
      return res.status(404).json({ success: false, message: "No orders found" });
    }

    res.status(200).json({
      success: true,
      data: orders,
      message: "Orders retrieved successfully",
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ success: false, message: `Internal Error: ${error.message}` });
  }
};

export default GetOrder;

