import { Users } from "../../models/users.model.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const newUser = await Users.findOne({
      email,
    });
    if (newUser.email === email) {
      if (newUser.password === password) {
        res.status(200).json({
          success: true,
          message: `Successfully login: ${newUser}`,
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
