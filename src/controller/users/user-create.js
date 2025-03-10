import { Users } from "../../models/users.model.js";

const userCreate = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await Users.create({
      email: email,
      password: password,
    });
    res.send(newUser);
  } catch (error) {
    res.status(500).send("");
  }
};
export default userCreate;
