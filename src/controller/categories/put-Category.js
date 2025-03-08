import { Category } from "../../models/categories.model.js";
import mongoose from "mongoose";

const updateCategory = async (req, res) => {
  const { id, categoryName } = req.params;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(`${id}`) },
      { categoryName },
      { new: true }
    );
    console.log(updatedCategory);
    res.status(200).json({
      success: true,
      message: `Successfully update the category with ${id}`,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: true, message: "Internal Error" });
  }
};
export default updateCategory;
