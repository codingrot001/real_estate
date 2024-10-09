import React, { useState, useEffect } from "react";
import PropertyFilters from "./PropertyFilters";
import SearchResults from "./SearchResults";
import Spinner from "../Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Hero = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:5000/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("There was an error fetching the properties!", error);
      }
    };
    fetchProperties();
  }, []);

  const handleSearch = (searchParams) => {
    setLoading(true);
    setError("");
    setSearchSubmitted(false);

    setTimeout(() => {
      try {
        const filtered = properties.filter((property) => {
          return (
            (searchParams.location
              ? property.location
                  .toLowerCase()
                  .includes(searchParams.location.toLowerCase())
              : true) &&
            (searchParams.selectedPropertyTypes.length > 0
              ? searchParams.selectedPropertyTypes.some(
                  (type) => type.value === property.type
                )
              : true) &&
            property.price >= searchParams.priceRange[0] &&
            property.price <= searchParams.priceRange[1] &&
            (searchParams.selectedAmenities.length > 0
              ? searchParams.selectedAmenities.every((amenity) =>
                  property.amenities.includes(amenity.value)
                )
              : true) &&
            (searchParams.furnished
              ? property.furnished === searchParams.furnished
              : true) &&
            (searchParams.petsAllowed
              ? property.petsAllowed === searchParams.petsAllowed
              : true)
          );
        });

        if (filtered.length === 0) {
          setError("No properties match your search criteria.");
        } else {
          setFilteredProperties(filtered);
        }
      } catch (err) {
        setError("An error occurred while fetching properties.");
      } finally {
        setLoading(false);
        setSearchSubmitted(true);
      }
    }, 1500); // 1.5 seconds delay to simulate loading
  };

  const closeSearchResults = () => {
    setSearchSubmitted(false);
    setFilteredProperties([]);
  };

  return (
    <div className="hero-section relative h-screen bg-cover bg-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative mt-8 z-10 flex flex-col justify-center items-center p-4 h-full text-gray-800 text-center space-y-6">
        {/* Heading */}
        <h1 className="text-2xl hidden md:block md:text-6xl font-bold leading-tight text-white">
          Find Your Dream Property
        </h1>
        <p className="text-lg md:text-2xl text-white hidden md:block">
          Search, rent, or buy your dream home with us.
        </p>

        {/* Property Filters */}
        <PropertyFilters
          onSearch={handleSearch}
          loading={loading}
          error={error}
        />

        {/* Loading Indicator */}
        {loading && (
          <div className="mt-4 text-white">
            <Spinner />
          </div>
        )}

        {/* Error Message */}
        {error && <div className="mt-4 text-red-500">{error}</div>}

        {/* Search Results */}
        {searchSubmitted && !loading && !error && (
          <SearchResults
            properties={filteredProperties}
            onClose={closeSearchResults}
            onViewDetails={(id) => navigate(`/property/${id}`)} // Pass the function for viewing details
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
