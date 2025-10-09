import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  PhoneNumber: { type: Number, required: true },
});

userSchema.statics.signup = async function (
  email,
  password,
  name,
  PhoneNumber
) {
  const exists = await this.findOne({ email });
  if (exists) throw Error("Email already in use");

  const salt = await bcrypt.genSalt(8);
  const hash = await bcrypt.hash(password, salt);

  return await this.create({ email, password: hash, name, PhoneNumber });
};

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw Error("Incorrect email");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw Error("Incorrect password");

  return user;
};

export default mongoose.model("User", userSchema);
