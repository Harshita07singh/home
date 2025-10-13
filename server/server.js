import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import blogRoutes from "./routes/blogRoute.js";
import userrouter from "./routes/userRoute.js";
import walletRoutes from "./routes/walletRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api", blogRoutes);
app.use("/api/user", userrouter);
app.use("/api/wallet", walletRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
  res.send("api is working");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
