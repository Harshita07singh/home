import { Schema as _Schema, model } from "mongoose";
import { genSalt, hash as _hash, compare } from "bcrypt";
import pkg from "validator";
import mongoose from "mongoose";
const { isEmail, isStrongPassword } = pkg;

const Schema = _Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
});

userSchema.statics.signup = async function (
  email,
  password,
  name,
  PhoneNumber
) {
  console.log(email, password, name, PhoneNumber);
  if (!email || !password || !name || !PhoneNumber) {
    throw Error("Incomplete Data");
  }
  if (!isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await genSalt(8);
  const hash = await _hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    name,
    PhoneNumber,
  });

  console.log("User created: ", user);

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  console.log("Model context:", this);
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};
export default mongoose.model("User", userSchema);
