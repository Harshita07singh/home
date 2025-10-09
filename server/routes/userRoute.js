import { Router } from "express";

import {
  signupUser,
  loginUser,
  getUserDetailsWithId,
} from "../controllers/userController.js";
const userrouter = Router();

userrouter.post("/login", loginUser);

userrouter.post("/register", signupUser);

userrouter.get("/users/:id", getUserDetailsWithId);

export default userrouter;
