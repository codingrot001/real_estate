import React from "react";
import NavLink from "../Footer/NavLink";
import Logo from "../Footer/Logo";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <Logo />
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul>
              <li>
                <NavLink pageName="Home" link="/" />
              </li>
              <li>
                <NavLink pageName="Properties" link="/properties" />
              </li>
              <li>
                <NavLink pageName="About us" link="/about" />
              </li>
              <li>
                <NavLink pageName="Resources" link="/resources" />
              </li>
              <li>
                <NavLink pageName="Contact Us" link="/contact" />
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Follow Us</h4>
            <div className="flex  space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-gray-400 hover:text-white text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-gray-400 hover:text-white text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-gray-400 hover:text-white text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-gray-400 hover:text-white text-2xl" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact Us</h4>
            <p className="text-gray-400">Email: info@youragency.com</p>
            <p className="text-gray-400">Phone: +1 (234) 567-89</p>
          </div>
        </div>
        <hr className="border-gray-600 mb-4" />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Agency Name. All Rights
            Reserved.
          </p>
          <p>
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="/terms-of-service"
              className="text-gray-400 hover:text-white"
            >
              {" "}
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
