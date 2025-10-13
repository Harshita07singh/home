import Wallet from "../models/walletModel.js";

export const getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.user._id });
    if (!wallet) return res.status(404).json({ error: "Wallet not found" });
    res.status(200).json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deposit = async (req, res) => {
  const { amount } = req.body;
  try {
    const wallet = await Wallet.findOneAndUpdate(
      { userId: req.user._id },
      { $inc: { balance: amount } },
      { new: true }
    );
    res.status(200).json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const withdraw = async (req, res) => {
  const { amount } = req.body;
  try {
    const wallet = await Wallet.findOne({ userId: req.user._id });
    if (wallet.balance < amount)
      return res.status(400).json({ error: "Insufficient funds" });

    wallet.balance -= amount;
    await wallet.save();
    res.status(200).json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
