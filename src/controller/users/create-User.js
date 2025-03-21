import { Users } from "../../models/users.model.js";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await Users.findOne({
      email,
    });
    const decodePassword = "777";
    const token = jwt.sign({ email: findUser.email }, decodePassword, {
      expiresIn: "1h",
    });
    console.log(findUser);
    console.log(token);

    if (findUser.email === email) {
      if (findUser.password === password) {
        res.status(200).json({
          success: true,
          message: `Successfully login: ${findUser}`,
          token: token,
        });
      } else {
        res.status(400).json({ error: true, message: `Wrong password ` });
      }
    } else {
      res.status(400).json({ error: true, message: `User not Found ` });
    }
  } catch (error) {
    res.status(500).json({ error: true, message: `Internal Error ${error}` });
  }
};
