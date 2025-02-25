import { Users } from "../../models/authentication.model.js";

const getUser = async (req, res) => {
  res.send(Users);
};
export default getUser;
