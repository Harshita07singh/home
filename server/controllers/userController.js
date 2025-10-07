import blogModel from "../models/blogModel.js";
import validator from "validator";
//route to get blog data
const Blog = async (req, res) => {
  res.json({ message: "Blog data fetched successfully" });
  try {
    const { name, title, desc, img, date, subCategory } = req.body;
    const exists = await blogModel.findOne({ title });
    if (exists) {
      return res.status(400).json({ error: "Blog already exists" });
    }

    if (!validator.isName(name)) {
      return res.status(400).json({ error: "Invalid name" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog data" });
  }
};

export { Blog };
