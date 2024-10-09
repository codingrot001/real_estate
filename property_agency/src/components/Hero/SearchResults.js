import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ properties, onClose, onViewDetails }) => {
  // Accept onViewDetails as a prop
  return (
    <div className="mt-6 w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg search-result relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h2 className="text-2xl font-bold mb-6">Search Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <button
                onClick={() => onViewDetails(property.id)} // Use onViewDetails function
                className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition duration-300 block text-center"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
