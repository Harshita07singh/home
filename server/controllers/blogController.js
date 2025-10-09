import blogModel from "../models/blogModel.js";
import mongoose from "mongoose";

export const createBlog = async (req, res) => {
  try {
    const { name, title, desc, img, subCategory } = req.body;

    const newBlog = await blogModel.create({
      name,
      title,
      desc,
      img,
      subCategory,
    });

    res
      .status(201)
      .json({ message: "Blog data created successfully", blog: newBlog });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Failed to create blog data" });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const { name, title, subCategory } = req.query;

    const filter = {};
    if (name) filter.name = name;
    if (title) filter.title = title;
    if (subCategory) filter.subCategory = subCategory;

    const blogs = await blogModel.find(filter);

    res.status(200).json({ message: "Blogs fetched successfully", blogs });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog data" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid blog ID" });
    }

    const { name, title, desc, img, subCategory } = req.body;

    const updatedBlog = await blogModel.findByIdAndUpdate(
      id,
      { name, title, desc, img, subCategory },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res
      .status(200)
      .json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ error: "Failed to update blog" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid blog ID" });
    }

    const deletedBlog = await blogModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res
      .status(200)
      .json({ message: "Blog deleted successfully", blog: deletedBlog });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Failed to delete blog" });
  }
};
