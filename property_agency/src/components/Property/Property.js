import React, { useState, useEffect } from "react";
// import properties from "../../data/mockData";
import axios from "axios";

function Property() {
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

  return (
    <div className="mt-8">
      <h2 className="text-2xl mb-6 text-center uppercase font-bold text-blue-700">
        Properties
      </h2>

      <div className="mt-6 w-full max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Property Image (Placeholder) */}
            <img
              src={`https://via.placeholder.com/400x300?text=${property.type}`}
              alt={property.type}
              className="w-full h-48 object-cover"
            />

            {/* Property Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {property.type}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                Location: {property.location}
              </p>
              <p className="text-lg font-bold text-gray-800 mb-2">
                ₦{property.price.toLocaleString()}
              </p>

              {/* Amenities */}
              <p className="text-sm text-gray-600 mb-2">
                <strong>Amenities:</strong>{" "}
                <span className="text-gray-700">
                  {property.amenities.join(", ")}
                </span>
              </p>

              {/* Furnished / Pets Allowed */}
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm">
                  {property.furnished ? (
                    <span className="text-green-600">Furnished</span>
                  ) : (
                    <span className="text-red-600">Unfurnished</span>
                  )}
                </p>
                <p className="text-sm">
                  {property.petsAllowed ? (
                    <span className="text-green-600">Pets Allowed</span>
                  ) : (
                    <span className="text-red-600">No Pets</span>
                  )}
                </p>
              </div>

              {/* Call to Action */}
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Property;
