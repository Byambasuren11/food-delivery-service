import { Users } from "../../models/users.model.js";

export const validateEmail = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(email);
  const emailCheck = await Users.findOne({ email });
  if (!emailCheck) {
    const newUser = await Users.create({
      email: email,
      password: password,
    });
    next();
    // res.status(200).json({
    //   success: true,
    //   message: `Successfully created the user: ${newUser}`,
    // });
  } else {
    next();
    //   res
    //     .status(400)
    //     .json({ error: true, message: "You already have a account" });
  }
};
