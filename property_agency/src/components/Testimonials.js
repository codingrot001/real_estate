import React from "react";
import testimonials from "../data/testimonials";

const Testimonial = ({ name, feedback, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <img
      src={image}
      alt={name}
      className="w-16 h-16 rounded-full mb-4 mx-auto"
    />
    <h3 className="font-semibold text-blue-600">{name}</h3>
    <p className="text-gray-600 italic">"{feedback}"</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials py-10">
      <div className="max-w-6xl mx-auto p-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">
          What Our Clients Say
        </h2>
        <p className="text-lg mb-6 text-gray-600">
          Here are some testimonials from our happy clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              name={testimonial.name}
              feedback={testimonial.feedback}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
