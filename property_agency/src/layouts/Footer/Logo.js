import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="text-2xl uppercase font-bold text-white">
      Logo
    </Link>
  );
}

export default Logo;
