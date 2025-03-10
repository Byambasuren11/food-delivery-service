import { Category } from "../../models/categories.model.js";

const getCategory = async (req, res) => {
  try {
    const category = await Category.find({});
    // res.send(category).status(200);
    res.status(200).json({
      success: true,
      data: category,
      message: `Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Error" });
  }
};
export default getCategory;
