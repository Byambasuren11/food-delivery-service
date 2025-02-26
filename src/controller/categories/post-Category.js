import { Category } from "../../models/categories.model.js";

const AddCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    const newCategory = await Category.create({
      categoryName: categoryName,
    });
    res.send(newCategory);
  } catch (error) {
    res.status(400).send("");
  }
};
export default AddCategory;
