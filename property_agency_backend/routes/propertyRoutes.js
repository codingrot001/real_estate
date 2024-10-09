const express = require("express");
const Property = require("../models/Property");

const router = express.Router();

// Route to get all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a single property by ID
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new property
router.post("/", async (req, res) => {
  const property = new Property({
    id: req.body.id,
    type: req.body.type,
    location: req.body.location,
    price: req.body.price,
    amenities: req.body.amenities,
    furnished: req.body.furnished,
    petsAllowed: req.body.petsAllowed,
    description: req.body.description,
    images: req.body.images,
  });

  try {
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to update a property by ID
router.put("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property)
      return res.status(404).json({ message: "Property not found" });

    // Update only the fields provided in the request body
    property.id = req.body.id || property.id;
    property.type = req.body.type || property.type;
    property.location = req.body.location || property.location;
    property.price = req.body.price || property.price;
    property.amenities = req.body.amenities || property.amenities;
    property.furnished = req.body.furnished || property.furnished;
    property.petsAllowed = req.body.petsAllowed || property.petsAllowed;
    property.description = req.body.description || property.description;
    property.images = req.body.images || property.images;

    // Save the updated document back to the database
    const updatedProperty = await property.save();
    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete a property by ID
router.delete("/:id", async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property)
      return res.status(404).json({ message: "Property not found" });

    res.json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
