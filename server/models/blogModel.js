import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model.Blog || ("Blog", blogSchema);
export default Blog;
