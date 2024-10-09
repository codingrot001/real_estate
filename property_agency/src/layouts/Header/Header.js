import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Logo from "./Logo";
import OpenToggle from "./OpenToggle";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
// import SearchBar from "./SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-index fixed top-0 left-0 z-50 w-full bg-white shadow-md py-4 px-6">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        {/* <SearchBar /> */}
        <Navigation />
        <OpenToggle onClick={toggleMenu} />

        {/* Mobile Menu */}
        {isOpen && <MobileMenu onClick={toggleMenu} />}
      </div>
    </header>
  );
};

export default Header;
