import React from "react";
import teamMembers from "../../data/teamMembers";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import WhatsappButton from "../../layouts/WhatsappButton";

const TeamMember = ({ name, position, image }) => (
  <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 rounded-full mb-2 border-2 border-blue-600"
    />
    <h3 className="font-semibold text-blue-600 text-lg">{name}</h3>
    <p className="text-sm text-gray-500">{position}</p>
  </div>
);

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="about-us py-10  my-14 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto p-6 text-center bg-white rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-6 text-blue-700 uppercase tracking-wide">
            About Us
          </h2>
          <p className="text-lg mb-6 text-gray-600">
            Welcome to Company Name . We are passionate about providing
            exceptional service and building lasting relationships.
          </p>

          <div className="mt-6 ">
            <h4 className="text-2xl font-semibold mb-2 text-blue-600">
              Our Mission
            </h4>
            <p className="mb-4 text-gray-600">
              At Company Name, we empower individuals and families to discover
              their perfect property. Our blend of expertise and personalized
              service ensures that you feel valued and understood throughout
              your journey.
            </p>

            <h4 className="text-2xl font-semibold mb-2 text-blue-600">
              Our Core Values
            </h4>
            <ul className="list-disc list-inside mb-4 text-left mx-auto max-w-2xl">
              <li>
                <h3 className="text-xl inline font-bold">Integrity:</h3>{" "}
                <p>
                  Transparency and honesty are the foundations of our client
                  relationships.
                </p>
              </li>
              <li>
                <h3 className="text-xl inline font-bold">Innovation:</h3>

                <p>
                  We utilize cutting-edge technology to enhance your experience.
                </p>
              </li>
              <li>
                <h3 className="text-xl inline font-bold">Community:</h3>{" "}
                <p>
                  Committed to supporting local initiatives and giving back.
                </p>
              </li>
            </ul>
          </div>

          <h4 className="text-2xl font-semibold mb-4 text-blue-600">
            Meet Our Team
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                position={member.position}
                image={member.image}
              />
            ))}
          </div>

          <div className="mt-6 text-gray-700">
            <h4 className="text-2xl font-semibold mb-2 text-blue-600">
              Join Us on Our Journey
            </h4>
            <p className="mb-4">
              We’re constantly evolving to meet the needs of our clients. Your
              feedback is invaluable to us. Together, let’s explore the
              possibilities of finding your dream property.
            </p>

            <p className="text-lg mt-6 mb-4">
              Ready to take the next step?{" "}
              <a
                href="/contact"
                className="text-blue-600 font-semibold underline"
              >
                Contact Us
              </a>{" "}
              today!
            </p>
          </div>
        </div>
      </section>
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default AboutUs;
