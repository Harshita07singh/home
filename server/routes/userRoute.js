import express from "express";
import { Blog } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/blog", Blog);
userRoute.get("/blog", Blog);
userRoute.patch("/blog", Blog);
userRoute.delete("/blog", Blog);
userRoute.put("/blog", Blog);

export default userRoute;
