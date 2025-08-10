import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Barcha maydonlar to‘ldirilishi shart" });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Bu email allaqachon ro‘yxatdan o‘tgan" });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email va parol kiritilishi shart" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email yoki parol noto‘g‘ri" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Email yoki parol noto‘g‘ri" });
    }
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({
      user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server xatosi", error: err.message });
  }
}; 