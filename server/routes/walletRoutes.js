import express from "express";
import {
  createWallet,
  depositFunds,
  withdrawFunds,
  getWallet,
  getTransactionHistory,
} from "../controllers/walletController.js";

const router = express.Router();

router.post("/create", createWallet);
router.post("/deposit", depositFunds);
router.post("/withdraw", withdrawFunds);
router.get("/:userId", getWallet);
router.get("/transactions/:userId", getTransactionHistory);

export default router;
