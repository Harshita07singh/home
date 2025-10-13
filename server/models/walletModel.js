import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  investmentAmount: {
    type: Number,
    default: 0,
  },
  profileAmount: {
    type: Number,
    default: 0,
  },
  currency: {
    type: String,
    default: "INR",
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Wallet", walletSchema);
