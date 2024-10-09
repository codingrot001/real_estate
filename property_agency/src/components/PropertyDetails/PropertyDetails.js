import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MapComponent from "../MapView/MapView";
import getCoordinates from "../../utils/geocode.js";

const PropertyDetails = () => {
  const { id } = useParams(); // Property ID from the URL params
  const [property, setProperty] = useState(null); // State to hold property details
  const [location, setLocation] = useState(null); // State to hold geocoded location
  const [error, setError] = useState(null); // Error state
  const [isFavorite, setIsFavorite] = useState(false); // Favorite state
  const [reviews, setReviews] = useState([]); // State for reviews
  const [newReview, setNewReview] = useState(""); // State for new review input

  // Contact form state
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Fetch property details using the property ID
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/properties/${id}`
        );
        setProperty(response.data); // Set property data
      } catch (error) {
        setError("Failed to load property details.");
      }
    };

    fetchProperty(); // Call the function to fetch property data
  }, [id]); // Dependency on 'id'

  // Fetch location coordinates for the map based on property location
  useEffect(() => {
    if (property) {
      const fetchCoordinates = async () => {
        try {
          const coords = await getCoordinates(property.location);
          setLocation({ name: property.location, ...coords }); // Set location state
        } catch (error) {
          setError("Failed to fetch location coordinates.");
        }
      };
      fetchCoordinates();
    }
  }, [property]); // Dependency on 'property'

  // Handle input changes for contact form
  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  // Submit contact form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Info Submitted:", contactInfo);
    alert("Inquiry submitted!");
    setContactInfo({ name: "", email: "", message: "" });
  };

  // Toggle favorite status
  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
    alert(`${isFavorite ? "Removed from" : "Added to"} favorites!`);
  };

  // Submit new review
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview(""); // Clear input
    }
  };

  // Display loading or error states
  if (!property) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!location) return <div>Loading map...</div>;

  return (
    <section className="px-4">

    <div className="container mx-auto p-4 m-24 bg-white shadow-lg rounded-l">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">{property.type}</h2>
      <button
        onClick={handleFavoriteToggle}
        className={`mb-4 ${
          isFavorite ? "text-red-600" : "text-yellow-600"
        } text-lg font-bold`}
      >
        {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
      </button>
      <img
        src={`https://via.placeholder.com/800x600?text=${property.type}`}
        alt={property.type}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div className="mb-4">
        <p className="text-lg">
          <strong className="font-bold mb-4 text-blue-600">Location:</strong>{" "}
          {property.location}
        </p>
        <p className="text-lg">
          <strong className="font-bold mb-4 text-blue-600">Price:</strong> ₦
          {property.price.toLocaleString()}
        </p>
        <p className="text-lg">
          <strong className="font-bold mb-4 text-blue-600">Amenities:</strong>{" "}
          {property.amenities.join(", ")}
        </p>
        <p className="text-lg">
          <strong className="font-bold mb-4 text-blue-600">
            {property.furnished ? "Furnished" : "Unfurnished"}
          </strong>
        </p>
        <p className="text-lg">
          <strong className="font-bold mb-4 text-blue-600">
            {property.petsAllowed ? "Pets Allowed" : "No Pets"}
          </strong>
        </p>
        <p className="text-lg">
          <strong className="font-bold mb-4 text-blue-600">Description:</strong>{" "}
          {property.description}
        </p>
      </div>

      {/* Map View */}
      <h3 className="text-2xl font-bold mb-4 text-blue-600">
        Property Location
      </h3>
      <MapComponent location={location} />

      {/* Contact Form */}
      <h3 className="text-lg font-bold mb-4 text-blue-600">
        Inquire About This Property
      </h3>
      <form onSubmit={handleSubmit} className="mt-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={contactInfo.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 rounded-lg ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={contactInfo.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 rounded-lg ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={contactInfo.message}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 rounded-lg ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-blue-600"
          rows="3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Inquiry
        </button>
      </form>

      {/* Review Section */}
      <h3 className="text-lg font-bold mb-4 text-blue-600">Reviews</h3>
      <form onSubmit={handleReviewSubmit} className="mb-4">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          required
          className="w-full p-2 mb-4 rounded-lg ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-blue-600"
          rows="3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit Review
        </button>
      </form>

      <div className="mt-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-300 mb-2 pb-2">
              <p>{review}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
    </section>
  );
};

export default PropertyDetails;
