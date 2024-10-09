import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons

const ContactInformation = () => {
  return (
    <section
      className="contact-info py-10 px-4"
      aria-labelledby="contact-info-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 id="contact-info-heading" className="text-3xl font-bold mb-6 text-blue-600">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaEnvelope className="text-4xl text-blue-600 mb-2" />
            <p className="font-semibold">Email</p>
            <a
              href="mailto:codingrot001@gmail.com"
              className="text-blue-600 hover:underline"
            >
              codingrot001@gmail.com
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaPhone className="text-4xl text-blue-600 mb-2" />
            <p className="font-semibold">Phone</p>
            <a href="tel:+2349033747946" className="text-blue-600 hover:underline">
              +234 90 337 479 46
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaMapMarkerAlt className="text-4xl text-blue-600 mb-2" />
            <p className="font-semibold">Address</p>
            <p className="text-blue-600">1234 Property Lane, City, Country</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
