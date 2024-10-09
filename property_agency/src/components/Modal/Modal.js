import React from "react";

const Modal = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-2">{property.type}</h2>
        <img
          src={`https://via.placeholder.com/400x300?text=${property.type}`}
          alt={property.type}
          className="w-full h-48 object-cover mb-4"
        />
        <p>
          <strong>Location:</strong> {property.location}
        </p>
        <p>
          <strong>Price:</strong> ₦{property.price.toLocaleString()}
        </p>
        <p>
          <strong>Amenities:</strong> {property.amenities.join(", ")}
        </p>
        <p>
          <strong>{property.furnished ? "Furnished" : "Unfurnished"}</strong>
        </p>
        <p>
          <strong>{property.petsAllowed ? "Pets Allowed" : "No Pets"}</strong>
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
