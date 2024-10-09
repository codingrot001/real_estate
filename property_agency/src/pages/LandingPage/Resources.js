import React from "react";
import {
  FaBookOpen,
  FaChartLine,
  FaHome,
  FaMoneyBillWave,
  FaLightbulb,
  FaTools,
  FaShieldAlt,
  FaFileAlt,
} from "react-icons/fa";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import WhatsappButton from "../../layouts/WhatsappButton";

const resources = [
  {
    id: 1,
    title: "Home Buying Guide",
    link: "#",
    description:
      "A comprehensive guide to navigate the home buying process from start to finish.",
    icon: <FaBookOpen className="text-3xl mb-2 text-blue-600" />,
  },
  {
    id: 2,
    title: "Understanding Mortgages",
    link: "#",
    description:
      "Learn about different types of mortgages and how to choose the right one for you.",
    icon: <FaMoneyBillWave className="text-3xl mb-2 text-blue-600" />,
  },
  {
    id: 3,
    title: "Property Investment Tips",
    link: "#",
    description:
      "Expert advice on making smart property investments to grow your wealth.",
    icon: <FaChartLine className="text-3xl mb-2 text-blue-600" />,
  },
  {
    id: 4,
    title: "Real Estate Market Trends",
    link: "#",
    description:
      "Stay updated with the latest trends in the real estate market.",
    icon: <FaHome className="text-3xl mb-2 text-blue-600" />,
  },
  {
    id: 5,
    title: "Home Maintenance Checklist",
    link: "#",
    description:
      "Keep your home in top shape with our seasonal maintenance checklist.",
    icon: <FaTools className="text-3xl mb-2 text-blue-600" />,
  },
  {
    id: 6,
    title: "Understanding Home Insurance",
    link: "#",
    description:
      "Find out what home insurance covers and how to choose the right policy.",
    icon: <FaShieldAlt className="text-3xl mb-2 text-blue-600" />,
  },
  {
    id: 7,
    title: "Real Estate Glossary",
    link: "#",
    description:
      "A handy glossary of real estate terms to help you navigate the industry.",
    icon: <FaFileAlt className="text-3xl mb-2 text-blue-600" />,
  },
  {
    id: 8,
    title: "Energy Efficiency Tips",
    link: "#",
    description:
      "Learn how to make your home more energy-efficient and save on bills.",
    icon: <FaLightbulb className="text-3xl mb-2 text-blue-600" />,
  },
];

const Resources = () => {
  return (
    <>
      <Header />
      <section className="resources py-14 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto p-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-700 uppercase">
            Resources for You
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Explore our resources to help you make informed decisions in your
            real estate journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                {resource.icon}
                <h3 className="font-semibold text-lg mb-2 text-blue-600">
                  {resource.title}
                </h3>
                <p className="text-gray-500 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="text-blue-600 hover:underline"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default Resources;
