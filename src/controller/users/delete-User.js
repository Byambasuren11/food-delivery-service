import { Users } from "../../models/users.model.js";

const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    const deletedUser = await Users.findOne({
      email,
    });
    console.log(email);
    if (!deletedUser) {
      res.status(400).json({ error: true, message: "Not Found" });
    } else {
      res.status(200).json({
        success: true,
        message: `Successfully delete the user with ${email}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Error" });
  }
};
export default deleteUser;
