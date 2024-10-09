import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const PropertyList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [properties, setProperties] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/properties");
      // setTimeout(() => {
        try {
          setProperties(response.data);
        } catch (err) {
          console.error("There was an error fetching the properties!", err);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      // }, 1500);
    };
    fetchData();
  }, []);
  const filteredProperties = properties.filter(
    (property) =>
      property.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePropertyClick = (_id) => {
    navigate(`/property/${_id}`);
  };

  return (
    <div className="p-4 mt-14">
      <h2 className="mb-4 text-3xl font-bold text-center text-blue-600">
        Properties
      </h2>
      <div className="max-w-6xl p-4 mx-auto">
        <input
          type="text"
          placeholder="Search properties..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 rounded-lg outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 p-4 mx-auto mt-6 bg-white rounded-lg shadow-lg md:p-6 md:grid-cols-2 lg:grid-cols-3">
            {currentProperties.length > 0 ? (
              currentProperties.map((property) => (
                <div
                  key={property._id}
                  className="overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-md cursor-pointer hover:shadow-lg"
                  onClick={() => handlePropertyClick(property._id)}
                >
                  <img
                    src={`https://via.placeholder.com/400x300?text=${property.type}`}
                    alt={property.type}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4">
                    <h3 className="mb-1 text-xl font-semibold text-gray-800">
                      {property.type}
                    </h3>
                    <p className="mb-1 text-sm text-gray-500">
                      Location: {property.location}
                    </p>
                    <p className="mb-2 text-lg font-bold text-gray-800">
                      ₦{property.price.toLocaleString()}
                    </p>
                    <p className="mb-2 text-sm text-gray-600">
                      <strong>Amenities:</strong>{" "}
                      <span className="text-gray-700">
                        {property.amenities.join(", ")}
                      </span>
                    </p>
                    <div className="flex items-center justify-between mb-4">
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
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No properties found.</p>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-blue-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
