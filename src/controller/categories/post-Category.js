import { Category } from "../../models/categories.model.js";

const AddCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    console.log(categoryName);

    const newCategory = await Category.create({
      categoryName: categoryName,
    });
    console.log("newCategory", newCategory);
    res.status(200).json({
      success: true,
      message: `Successfully created the category: ${newCategory}`,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: `Internal Error ${error}` });
  }
};
export default AddCategory;
