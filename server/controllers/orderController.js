import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  const { assetType, assetSymbol, orderType, quantity, pricePerUnit } =
    req.body;
  const totalAmount = quantity * pricePerUnit;

  try {
    const order = await Order.create({
      userId: req.user._id,
      assetType,
      assetSymbol,
      orderType,
      quantity,
      pricePerUnit,
      totalAmount,
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
