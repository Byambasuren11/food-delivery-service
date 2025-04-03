import { Users } from "../../models/users.model.js";

export const getUser = async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json({
      success: true,
      data: users,
      message: `Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Error" });
  }
};
