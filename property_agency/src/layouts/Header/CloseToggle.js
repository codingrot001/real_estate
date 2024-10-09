import React from "react";

function CloseToggle({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex lg:hidden items-center text-blue-500 hover:text-blue-700 transition duration-300"
    >
      <span className="sr-only">Close menu</span>
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

export default CloseToggle;
