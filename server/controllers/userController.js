import userModel from "../models/userModel.js";
import pkg from "jsonwebtoken";
const { sign } = pkg;
const { signup, login, findById } = userModel;
const createToken = (_id) => {
  return sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await login(email, password);

    const token = createToken(user._id);
    const user_id = user._id;

    res.status(200).json({ email, token, user_id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password, name, PhoneNumber } = req.body;

  try {
    const user = await signup(email, password, name, PhoneNumber);

    const token = createToken(user._id);
    const user_id = user._id;
    res.status(200).json({ email, token, user_id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserDetailsWithId = async (req, res) => {
  const { id } = req.params;
  const user_data = await findById(id);
  console.log(user_data);
  res.status(200).json({
    name: user_data.name,
    email: user_data.email,
    PhoneNumber: user_data.PhoneNumber,
  });
};
export { loginUser, signupUser, getUserDetailsWithId };
