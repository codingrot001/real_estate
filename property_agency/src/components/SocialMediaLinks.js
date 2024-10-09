import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialMediaLinks = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook className="text-2xl" />,
      url: "https://facebook.com",
      color: "text-blue-600",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-2xl" />,
      url: "https://instagram.com",
      color: "text-pink-600",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-2xl" />,
      url: "https://twitter.com",
      color: "text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://linkedin.com",
      color: "text-blue-700",
    },
  ];

  return (
    <section
      className="social-media py-10"
      aria-labelledby="social-media-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 id="social-media-heading" className="text-3xl font-bold mb-4 text-blue-600">
          Follow Us
        </h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 transition-transform transform hover:scale-110 rounded-full bg-white shadow-lg ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
