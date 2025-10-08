import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

import blogRoutes from "./routes/blogRoute.js";

// app configuration
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/users", blogRoutes);

app.get("/", (req, res) => {
  res.send("api is working");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
