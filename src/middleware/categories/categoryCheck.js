import { Category } from "../../models/categories.model.js";

export const validateCategoryName = async (req, res, next) => {
  try {
    const { categoryName } = req.body;

    const newCategory = await Category.findOne({ categoryName });
    console.log(newCategory);
    if (!newCategory) {
      next();
    } else {
      res
        .status(400)
        .json({ error: true, message: "Already have a categoryName" });
    }
  } catch (error) {}
};
