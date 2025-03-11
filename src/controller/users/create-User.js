import { Users } from "../../models/users.model.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const newUser = await Users.create({
      email: email,
      password: password,
    });
    res.status(200).json({
      success: true,
      message: `Successfully created the category: ${newUser}`,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: `Internal Error ${error}` });
  }
};
