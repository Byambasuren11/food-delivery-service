import { Users } from "../../models/users.model.js";

export const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  const emailCheck = await Users.findOne({ email });
  if (!emailCheck) {
    next();
  } else {
    res
      .status(400)
      .json({ error: true, message: "You already have a account" });
  }
};
