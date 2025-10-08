import blogModel from "../models/blogModel.js";

export const createBlog = async (req, res) => {
  try {
    const { name, title, desc, img, subCategory } = req.body;

    // Create and save the new blog
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
  // logic to fetch blogs

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
    res.status(500).json({ error: "Failed to fetch blog data" });
  }
};

export const updateBlog = async (req, res) => {
  // logic to update a blog by ID
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
    res.status(500).json({ error: "Failed to update blog data" });
  }
};

export const deleteBlog = async (req, res) => {
  // logic to delete a blog by ID
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
    res.status(500).json({ error: "Failed to delete blog data" });
  }
};
