import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center">
      <button className="bg-blue-500 hover:bg-transparent hover:text-blue-700 font-semibold text-white py-2 hover:ring-blue-700 hover:ring-2 px-4 rounded">
        <Link to="/register">Get Started</Link>
      </button>
    </div>
  );
}

export default Login;
