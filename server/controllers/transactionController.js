import Transaction from "../models/transactionModel.js";

export const createTransaction = async (req, res) => {
  const { type, amount, reference } = req.body;

  try {
    const transaction = await Transaction.create({
      userId: req.user._id,
      walletId: req.wallet._id,
      type,
      amount,
      reference,
      status: "success",
    });

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id }).sort({
      timestamp: -1,
    });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
