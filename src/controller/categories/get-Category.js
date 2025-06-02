import { Category } from "../../models/categories.model.js";

export const getCategory = async (req, res) => {
  try {
    const category = await Category.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "foodCount",
        },
      },
      {
        $project: {
          categoryName: 1,
          foodCount: { $size: "$foodCount" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: category,
      message: "Successfully fetched categories",
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res
      .status(500)
      .json({ error: true, message: `Internal Error: ${error.message}` });
  }
};
