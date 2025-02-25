import { Users } from "../../models/authentication.model.js";

const userCreate = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await Users.create({
      email: email,
      password: password,
    });
    res.send(newUser);
  } catch (error) {
    res.status(400).send("");
  }
};
export default userCreate;
