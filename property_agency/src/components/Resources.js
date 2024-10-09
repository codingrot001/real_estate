import React from "react";
import { FaBookOpen, FaChartLine, FaHome, FaMoneyBillWave } from "react-icons/fa";

const resources = [
  {
    id: 1,
    title: "Home Buying Guide",
    link: "#",
    icon: <FaBookOpen className="text-3xl mb-2" />,
  },
  {
    id: 2,
    title: "Understanding Mortgages",
    link: "#",
    icon: <FaMoneyBillWave className="text-3xl mb-2" />,
  },
  {
    id: 3,
    title: "Property Investment Tips",
    link: "#",
    icon: <FaChartLine className="text-3xl mb-2" />,
  },
  {
    id: 4,
    title: "Real Estate Market Trends",
    link: "#",
    icon: <FaHome className="text-3xl mb-2" />,
  },
];

const Resources = () => {
  return (
    <section className="resources py-10">
      <div className="max-w-6xl mx-auto p-4 text-center text-blue-600 ">
        <h2 className="text-3xl font-bold mb-4">Resources for You</h2>
        <p className="text-lg mb-6">
          Explore our resources to help you make informed decisions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="border border-gray-300 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              {resource.icon}
              <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
              <a href={resource.link} className="text-blue-600 hover:underline">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
