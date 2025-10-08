import express from "express";
import {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

const blogRoute = express.Router();

blogRoute.post("/blog", createBlog);
blogRoute.get("/blog", getBlogs);
blogRoute.patch("/blog/:id", updateBlog);
blogRoute.delete("/blog/:id", deleteBlog);

export default blogRoute;
