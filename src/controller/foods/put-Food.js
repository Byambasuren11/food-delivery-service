import { Food } from "../../models/food.model.js";

const updateFood = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const updatedFood = await Food.findById({
      _id: new mongoose.Types.ObjectId(`${id}`),
    });
    console.log(updatedFood);
    res.status(200).json({
      success: true,
      message: `Successfully find the food with ${id}`,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: "Internal Error" });
  }
};
export default updateFood;
