import { Users } from "../../models/authentication.model.js";

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  // const checkUser = await Users.findOne({ email });
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
  // res.send(" fd");
};
export default validateLogin;
