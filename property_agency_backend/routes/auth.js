const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../Models/User");
const verifyToken = require("../middleware/auth");
const { registerVendor } = require("../controllers/userController");

const JWT_SECRET = process.env.JWT_SECRET;

// @route POST /auth/register
// @desc Register a new user
// @access Public
router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ param: "email", msg: "User already exists" }] });
      }

      user = new User({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });

      await user.save();

      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

      res.status(201).json({
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    } catch (error) {
      console.error("Registration Error:", error);
      res.status(500).send("Server Error");
    }
  }
);

// @route POST /auth/login
// @desc Authenticate user and get token
// @access Public
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
      res.json({
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).send("Server Error");
    }
  }
);

// @route GET /auth/user
// @desc Get user details
// @access Private
router.get("/user", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Fetch User Error:", error);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/admin/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        name,
        email,
        password: await bcrypt.hash(password, 10),
        role: "admin", // Set role to admin
      });

      await user.save();

      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

      res.status(201).json({
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    } catch (error) {
      console.error("Admin Registration Error:", error);
      res.status(500).send("Server Error");
    }
  }
);

// @route POST /auth/admin/login
router.post(
  "/admin/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user || user.role !== "admin") {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
      res.json({
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    } catch (error) {
      console.error("Admin Login Error:", error);
      res.status(500).send("Server Error");
    }
  }
);

// @route POST /auth/register-vendor
// @desc Register a new vendor
// @access Private (Admin only)
router.post("/register-vendor", verifyToken, registerVendor);

module.exports = router;
