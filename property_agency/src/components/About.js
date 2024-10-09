import React from "react";
import teamMembers from "../data/teamMembers"; 

const TeamMember = ({ name, position, image }) => (
  <div className="flex flex-col items-center">
    <img src={image} alt={name} className="w-24 h-24 rounded-full mb-2" />
    <h3 className="font-semibold text-blue-600">{name}</h3>
    <p className="text-sm text-gray-400">{position}</p>
  </div>
);

const AboutUs = () => {
  return (
    <section className="about-us py-8 px-4">
      <div className="max-w-6xl mx-auto text-center p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 ">About Us</h2>
        <h3 className="text-lg mb-4 text-gray-600">
          Welcome to Company name. Our team is dedicated to providing exceptional service.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} name={member.name} position={member.position} image={member.image} />
          ))}
        </div>

        <p className="text-lg mt-6 mb-4">
          Ready to find your dream property? <a href="/contact" className="text-blue-600 font-semibold">Contact Us</a> today!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;