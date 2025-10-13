import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assetType: {
    type: String,
    enum: ["stock", "crypto", "commodity"],
    required: true,
  },
  assetSymbol: {
    type: String,
    required: true,
  },
  orderType: {
    type: String,
    enum: ["buy", "sell"],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pricePerUnit: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);
