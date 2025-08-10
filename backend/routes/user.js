import express from "express";
import { protect } from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();

// GET /api/users/me
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User topilmadi" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
});

export default router; 