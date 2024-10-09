import React from "react";

const CTA = () => {
  return (
    <section className="cta bg-blue-600 text-white shadow-sm py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
        <p className="mb-6">Contact us today to get started!</p>
        <a href="/contact" className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CTA;
