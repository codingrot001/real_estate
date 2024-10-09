const User = require("../Models/User"); // Ensure this path is correct
const bcrypt = require("bcryptjs");

const registerVendor = async (req, res) => {
  const { name, email, password } = req.body;

  // Ensure only admins can access this route
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied." });
  }

  try {
    // Check if the vendor already exists
    let vendor = await User.findOne({ email });
    if (vendor) {
      return res.status(400).json({ error: "Vendor already exists" });
    }

    // Create new vendor
    vendor = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      role: "vendor", // Explicitly set role to vendor
    });

    await vendor.save();

    res.status(201).json({ message: "Vendor registered successfully." });
  } catch (error) {
    console.error("Vendor Registration Error:", error);
    res.status(500).send("Server Error");
  }
};

module.exports = { registerVendor };
