import React from "react";
import { FaMapMarkerAlt, FaUtensils, FaTrain } from "react-icons/fa"; // Importing relevant icons

const LocalAreaHighlights = () => {
  const highlights = [
    {
      name: "Central Park",
      description:
        "A beautiful park in the heart of the city, great for relaxation.",
      icon: <FaMapMarkerAlt className="text-4xl text-green-500" />,
    },
    {
      name: "Top Restaurants",
      description:
        "Home to various gourmet restaurants offering world-class cuisine.",
      icon: <FaUtensils className="text-4xl text-red-500" />,
    },
    {
      name: "Public Transport",
      description:
        "Easy access to public transport, making commuting convenient.",
      icon: <FaTrain className="text-4xl text-blue-500" />,
    },
  ];

  return (
    <section
      className="local-area py-10 px-4"
      aria-labelledby="local-area-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 id="local-area-heading" className="text-3xl font-bold mb-6 text-blue-600">
          Local Area Highlights
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {highlight.icon}
                <h3 className="font-semibold text-lg ml-3 text-blue-600">{highlight.name}</h3>
              </div>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalAreaHighlights;
