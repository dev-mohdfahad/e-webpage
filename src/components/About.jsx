import React from "react";

const About = () => {
  return (
    <div className="bg-slate-700 text-white min-h-screen flex flex-col items-center p-6">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-blue-400 mb-4">About Us</h1>
      <p className="text-lg max-w-3xl text-center text-gray-300 m-8">
        Welcome to CODEVAMP STORE, where innovation meets technology. We are dedicated to delivering high-quality digital solutions that empower businesses worldwide.
      </p>

      {/* Company Details */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-300">Our Mission</h2>
          <p className="text-gray-300 mt-2">
            Our mission is to drive digital transformation by providing cutting-edge software solutions, ensuring efficiency, security, and scalability for businesses of all sizes.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-300">What We Do</h2>
          <p className="text-gray-300 mt-2">
            We specialize in web development, mobile applications, AI solutions, and cloud computing to help businesses thrive in the digital era.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-400">Get in Touch</h2>
        <p className="text-gray-300 mt-2">
          Have a project in mind? Let’s build something great together!
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
