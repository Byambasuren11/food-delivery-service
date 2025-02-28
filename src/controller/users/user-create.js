import { Users } from "../../models/users.model.js";

const userCreate = async (req, res) => {
  const { email } = req.body;
  try {
    const newUser = await Users.create({
      email: email,
    });
    res.send(newUser);
  } catch (error) {
    res.status(500).send("");
  }
};
export default userCreate;
