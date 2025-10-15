import Wallet from "../models/walletModel.js";
import User from "../models/userModel.js";

export const createWallet = async (req, res) => {
  try {
    const { userId } = req.body;

    // Validate userId
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if wallet already exists
    const existing = await Wallet.findOne({ userId });
    if (existing) {
      return res.status(400).json({ message: "Wallet already exists" });
    }

    // Create new wallet
    const wallet = new Wallet({ userId });
    await wallet.save();
    res.status(201).json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deposit funds
export const depositFunds = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    // Validate input
    if (!userId || !amount) {
      return res
        .status(400)
        .json({ message: "User ID and amount are required" });
    }

    if (amount <= 0) {
      return res.status(400).json({ message: "Invalid deposit amount" });
    }

    // Find wallet
    let wallet = await Wallet.findOne({ userId });

    // Create wallet if it doesn't exist
    if (!wallet) {
      wallet = new Wallet({ userId });
    }

    // Update wallet
    wallet.balance += Number(amount);
    wallet.transactions.push({
      type: "deposit",
      amount: Number(amount),
      date: new Date(),
    });

    await wallet.save();
    res.status(200).json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Withdraw funds
export const withdrawFunds = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    // Validate input
    if (!userId || !amount) {
      return res
        .status(400)
        .json({ message: "User ID and amount are required" });
    }

    if (amount <= 0) {
      return res.status(400).json({ message: "Invalid withdrawal amount" });
    }

    // Find wallet
    const wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    // Check balance
    if (wallet.balance < amount) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    // Update wallet
    wallet.balance -= Number(amount);
    wallet.transactions.push({
      type: "withdrawal",
      amount: Number(amount),
      date: new Date(),
    });

    await wallet.save();
    res.status(200).json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get wallet details
export const getWallet = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Find wallet
    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      // Create a new wallet if one doesn't exist
      const newWallet = new Wallet({ userId });
      await newWallet.save();
      return res.status(200).json(newWallet);
    }

    res.status(200).json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get transaction history
export const getTransactionHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    res.status(200).json(wallet.transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
