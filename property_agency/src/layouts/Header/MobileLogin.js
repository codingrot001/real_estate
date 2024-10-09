import React from "react";
import { Link } from "react-router-dom";

function MobileLogin() {
  return (
    <div className="flex items-center">
      <button className="-mx-3 block text-white ring-2 ring-blue-700 hover:text-blue-700  rounded-lg px-3 py-2 text-base  font-semibold leading-7 bg-blue-700 hover:bg-transparent w-full">
        <Link to="/login">Log in</Link>
      </button>
    </div>
  );
}

export default MobileLogin;
