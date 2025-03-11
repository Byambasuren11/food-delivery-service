export const validateCategoryName = (req, res, next) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      next();
    } else {
      res
        .status(400)
        .json({ error: true, message: "Already have a categoryName" });
    }
  } catch (error) {}
};
