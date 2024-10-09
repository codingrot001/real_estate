import React from "react";
import { Link } from "react-router-dom";

function MobileLink({ pageName, link, isActive = false }) {
  return (
    <Link
      to={link}
      className="-mx-3 block text-blue-500 hover:text-blue-700  rounded-lg px-3 py-2 text-base  font-semibold leading-7 hover:bg-gray-50"
    >
      {pageName}
    </Link>
  );
}

export default MobileLink;
