import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();
router.use(requireAuth);

router.post("/", createOrder);
router.get("/", getOrders);

export default router;
