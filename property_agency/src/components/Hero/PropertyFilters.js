import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
// import properties from "../../data/mockData"; // Adjust the path if necessary
import axios from "axios";

const PropertyFilters = ({ onSearch }) => {
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [priceRange, setPriceRange] = useState([100000, 10000000]);
  const [furnished, setFurnished] = useState(false);
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [location, setLocation] = useState("");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/properties")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the properties!", error);
      });
  }, []);

  // Dynamically define options for property types from mock data
  const propertyOptions = [
    ...new Set(
      properties.map((property) => ({
        label: property.type,
        value: property.type.toLowerCase(),
      }))
    ),
  ];

  // Dynamically define options for amenities from mock data
  const amenityOptions = [
    ...new Set(
      properties.flatMap((property) =>
        property.amenities.map((amenity) => ({
          label: amenity,
          value: amenity.toLowerCase().replace(/ /g, "_"), // Adjust formatting if needed
        }))
      )
    ),
  ];

  // Handler for the price range slider
  const handlePriceChange = (e) => {
    setPriceRange([100000, e.target.value]);
  };

  // Handle form submission
  const handleSubmit = () => {
    const searchParams = {
      location,
      selectedPropertyTypes,
      selectedAmenities,
      priceRange,
      furnished,
      petsAllowed,
    };
    onSearch(searchParams);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col gap-6">
      {/* Location Input */}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter a state, locality, or area"
        className="w-full p-4 rounded-lg ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-blue-600"
      />

      {/* Multi-select for Property Types */}
      <MultiSelect
        options={propertyOptions}
        value={selectedPropertyTypes}
        onChange={setSelectedPropertyTypes}
        labelledBy="Select Property Type"
        className="w-full p-4 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600"
      />

      {/* Price Range Slider */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold">Price Range:</label>
          <span className="text-gray-700">
            ₦{priceRange[0]} - ₦{priceRange[1]}
          </span>
        </div>
        <input
          type="range"
          min="100000"
          max="10000000"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full"
          step="10000"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSubmit}
        className="w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Search
      </button>

      {/* Additional Filter Options */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Amenities Multi-select */}
          <div className="flex-1">
            <MultiSelect
              options={amenityOptions}
              value={selectedAmenities}
              onChange={setSelectedAmenities}
              labelledBy="Select Amenities"
              className="w-full p-4 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Toggle Switches */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <label className="mr-2">Furnished:</label>
              <input
                type="checkbox"
                checked={furnished}
                onChange={() => setFurnished(!furnished)}
                className="form-toggle h-5 w-5 text-blue-600"
              />
            </div>
            <div className="flex items-center">
              <label className="mr-2">Pets Allowed:</label>
              <input
                type="checkbox"
                checked={petsAllowed}
                onChange={() => setPetsAllowed(!petsAllowed)}
                className="form-toggle h-5 w-5 text-blue-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
