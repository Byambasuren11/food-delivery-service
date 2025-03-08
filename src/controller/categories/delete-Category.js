import { Category } from "../../models/categories.model.js";
import mongoose from "mongoose";

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(`${id}`),
    });

    if (!deletedCategory) {
      res.status(400).json({ error: true, message: "Not Found" });
    } else {
      res.status(200).json({
        success: true,
        message: `Successfully delete the category with ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Error" });
  }
};
export default deleteCategory;
