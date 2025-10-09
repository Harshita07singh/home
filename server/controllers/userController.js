import userModel from "../models/userModel.js";

const signupUser = async (req, res) => {
  const { email, password, name, PhoneNumber } = req.body;

  try {
    if (!email || !password || !name || !PhoneNumber) {
      return res.status(400).json({ error: "Incomplete Data" });
    }

    const user = await userModel.signup(email, password, name, PhoneNumber);

    res.status(200).json({
      message: "Signup successful",
      user_id: user._id,
      name: user.name,
      email: user.email,
      PhoneNumber: user.PhoneNumber,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "All fields must be filled" });
    }

    const user = await userModel.login(email, password);

    res.status(200).json({
      message: "Login successful",
      user_id: user._id,
      name: user.name,
      email: user.email,
      PhoneNumber: user.PhoneNumber,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserDetailsWithId = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      name: user.name,
      email: user.email,
      PhoneNumber: user.PhoneNumber,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { signupUser, loginUser, getUserDetailsWithId };
