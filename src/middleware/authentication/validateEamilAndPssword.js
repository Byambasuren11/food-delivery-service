export const validateEamilAndPassword = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);
  if (!email) {
    res.status(400).json({ error: "bad request", message: "email required" });
  } else if (!password) {
    res
      .status(400)
      .json({ error: "bad request", message: "password required" });
  } else {
    next();
  }
};
