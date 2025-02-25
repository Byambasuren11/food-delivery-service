import { Users } from "../../models/authentication.model.js";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(password);

  const checkUser = await Users.findOne({ email });

  if (checkUser.email === email) {
    if (checkUser.password === password) {
      res.send("sucsess");
    }
  }
  console.log(checkUser);
};
export default loginUser;
