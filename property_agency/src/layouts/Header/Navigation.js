import React from "react";
import NavLink from "./NavLink";
import Login from "./Login";

function Navigation() {
  return (
    <nav className="hidden lg:flex lg:space-x-4 uppercase items-center">
      <NavLink pageName="Home" link="/" />
      <NavLink pageName="Properties" link="/properties" />
      <NavLink pageName="About us" link="/about" />
      <NavLink pageName="Resources" link="/resources" />
      <NavLink pageName="Contact Us" link="/contact" />
      <Login />
    </nav>
  );
}

export default Navigation;
