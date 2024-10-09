import React from "react";
import { Link } from "react-router-dom";

function NavLink({ pageName, link, isActive = false }) {
  return (
    <Link to={link} className="text-gray-400 hover:text-white">
      {pageName}
    </Link>
  );
}

export default NavLink;
