import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import WhatsappButton from "../../layouts/WhatsappButton";

const ContactUs = () => {
  return (
    <>
      <Header />
      <section className="contact-us py-10 bg-gradient-to-b from-blue-50 to-white my-14">
        <div className="max-w-6xl mx-auto p-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-700 uppercase">
            Contact Us
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            We’d love to hear from you! Please fill out the form below or use
            the contact information provided.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Get in Touch
              </h3>
              <form>
                <div className="mb-4">
                  <label className="block text-left mb-2 text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border focus:outline-none focus:ring-2 focus:ring-blue-600  border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left mb-2 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border focus:outline-none focus:ring-2 focus:ring-blue-600  border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left mb-2 text-gray-700">
                    Message
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Contact Information
              </h3>
              <div className="flex items-center mb-4">
                <FaPhone className="text-blue-600 text-2xl mr-2" />
                <span className="text-gray-700">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-blue-600 text-2xl mr-2" />
                <span className="text-gray-700">info@olaandson.com</span>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-2" />
                <span className="text-gray-700">
                  123 Main St, Cityville, ST 12345
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Location
            </h3>
            <iframe
              title="Google Maps Location"
              className="w-full h-64 border-0 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509176!2d144.95373531531297!3d-37.81720997975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f71f9c1%3A0xb0c88c84a7f261c3!2s123%20Main%20St%2C%20Cityville%2C%20ST%2012345!5e0!3m2!1sen!2sus!4v1632921184861!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default ContactUs;
