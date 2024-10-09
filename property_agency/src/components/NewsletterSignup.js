import React, { useState } from "react";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSuccessMessage("Thank you for subscribing!");
      setErrorMessage("");
      setEmail("");
    } else {
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage("");
    }
  };
  return (
    <section className="newsletter-signup py-10 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto p-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mb-6 text-blue-600">
          Stay updated with the latest properties and news.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-lg border ring-1 ring-gray-300 outline-none focus:ring-2 focus:ring-blue-600 border-gray-300 md:mr-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg "
          >
            Subscribe
          </button>
        </form>
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </section>
  );
}

export default NewsletterSignup;
