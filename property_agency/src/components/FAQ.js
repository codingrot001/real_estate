import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Importing icons from react-icons

const FAQ = () => {
  const faqs = [
    {
      question: "What types of properties do you offer?",
      answer: "We offer apartments, villas, townhouses, and more.",
    },
    {
      question: "How do I schedule a property viewing?",
      answer:
        "You can schedule a viewing by contacting us through our website or calling us.",
    },
    {
      question: "What are your fees?",
      answer:
        "Our fees vary based on the type of property and services you require.",
    },
    {
      question: "What is the application process?",
      answer:
        "The application process can be completed online through our website.",
    },
    {
      question: "Do you offer property management services?",
      answer: "Yes, we provide comprehensive property management services.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq py-10 px-4" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto">
        <h2
          id="faq-heading"
          className="text-3xl font-bold mb-6 text-center text-blue-600"
        >
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 text-blue-600"
            >
              <button
                className="flex items-center justify-between w-full text-left font-semibold text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <FaMinus className="ml-2" />
                ) : (
                  <FaPlus className="ml-2" />
                )}
              </button>
              {openIndex === index && (
                <p id={`faq-answer-${index}`} className="text-gray-700 mt-2">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
