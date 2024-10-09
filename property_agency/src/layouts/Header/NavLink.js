import React from "react";
import { Link } from "react-router-dom";

function NavLink({ pageName, link, isActive = false }) {
  return (
    <Link
      to={link}
      className="bg-transparent text-blue-500 font-semibold hover:text-blue-700  border-blue-500 hover:border-transparent rounded"
    >
      {pageName}
    </Link>
  );
}

export default NavLink;
