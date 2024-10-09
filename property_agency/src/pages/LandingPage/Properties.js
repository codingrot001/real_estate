import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import axios from "axios";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import WhatsappButton from "../../layouts/WhatsappButton";

const Properties = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(""); // State for error messages

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/properties");

      setTimeout(() => {
        try {
          setProperties(response.data);
        } catch (err) {
          console.error("There was an error fetching the properties!", err);
          setError("There was an error fetching the properties."); // Set error message
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      }, 1500);
    };

    fetchProperties();
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
    <>
      <Header />
      <div className="py-14 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto p-4 mt-16">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 rounded-lg ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {loading ? ( 
          <div className="mt-4 text-white">
            <Spinner />
          </div>
        ) : error ? ( 
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="mt-6 w-full max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProperties.length > 0 ? (
              currentProperties.map((property) => (
                <div
                  key={property._id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => handlePropertyClick(property._id)}
                >
                  <img
                    src={`https://via.placeholder.com/400x300?text=${property.type}`}
                    alt={property.type}
                    className="w-full h-48 object-cover"
                  />
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
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Amenities:</strong>{" "}
                      <span className="text-gray-700">
                        {property.amenities.join(", ")}
                      </span>
                    </p>
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
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No properties found.</p>
            )}
          </div>
        )}

        {totalPages > 1 && ( // Show pagination only if there are multiple pages
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
        )}
      </div>
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default Properties;
