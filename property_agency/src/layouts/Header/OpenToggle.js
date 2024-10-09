import React from "react";

function OpenToggle({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex lg:hidden items-center text-blue-500 hover:text-blue-700 transition duration-300"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}

export default OpenToggle;
