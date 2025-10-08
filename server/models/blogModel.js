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
  },
  img: {
    type: String,
  },

  subCategory: {
    type: String,
    required: true,
  },
});

const blogModel = mongoose.model("Blog", blogSchema);

export default blogModel;
