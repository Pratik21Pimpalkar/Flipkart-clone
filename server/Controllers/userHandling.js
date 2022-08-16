import User from "../Modals/userSchema.js";
import { hashPassword } from "../Helper/auth.js";

export const signin = async (req, res) => {
  console.log(req.body);
  const { name, email, secret, password } = req.body;
  if (!email || !secret || !name)
    return res.status(400).send("Please fill all the fields");
  if (!password || password.length < 5)
    return res.status(400).send("Password length should be more than 5");

  const exist = await User.findOne({ email });
  if (exist) return res.status(400).send("Email already exist.");
  const hashpassword = await hashPassword(password);

  const user = new User({
    name,
    email,
    password: hashpassword,
    secret,
  });

  try {
    await user.save();
    console.log("Registered Succesfully");
    return res.status(200).send("Registration Succesfull");
  } catch (error) {
    console.log("Registration Failed: " + error);
    return res.status(200).send("Registration Failed");
  }
};

export const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ name });
    if (!user)
      return res.status(400).send("User not found");
    const match = await comparePassword(password, user.password)
    if (!match)
      return res.status(400).send("Please enter valid credentials")
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" })
    user.password = undefined;
    user.cpassword = undefined;
    res.status(200).json({
      token, user
    })

  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
}