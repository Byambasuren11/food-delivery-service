import { Users } from "../../models/users.model.js";

const postUser = async (req, res, next) => {
  const { email } = req.body;
  try {
    const newUser = await Users.findOne({
      email,
    });
    if (!newUser) {
      res.status(200).json({
        success: true,
        message: `Successfully`,
      });
    } else {
      res
        .status(400)
        .json({ error: true, message: "You already have account" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Error" });
  }
};
export default postUser;
