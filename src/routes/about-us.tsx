import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        About Us
      </h1>

      {/* Who We Are Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 inline-block mb-4">
          Who We Are
        </h2>
        <p className="text-lg text-gray-700">
          We are a group of freshers — just like you — who have personally experienced the challenges of preparing for job interviews. During our own placement journeys, we discovered that many students face similar difficulties — from anxiety to lack of real interview practice.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          That realization inspired us to create <span className="font-semibold text-blue-600">AI Mock Interview</span> — a platform built by students, for students, to help all of us prepare more effectively and confidently.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 inline-block mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          Our mission is simple: to empower every fresher with the tools and confidence they need to face real interviews. We aim to break down the fear of interviews by providing a space where students can practice, learn, and grow without judgment.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          With AI-powered mock interviews, instant feedback, and a supportive environment, we’re working to make interview preparation accessible and stress-free for everyone.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 inline-block mb-4">
          What We Offer
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>AI-driven mock interview simulations with instant feedback</li>
          <li>Customized practice based on your domain and experience</li>
          <li>Detailed performance reports and areas for improvement</li>
          <li>Helpful tips and resources to level up your preparation</li>
          <li>A friendly and relatable experience designed by students, for students</li>
        </ul>
      </section>

      {/* Quote Section */}
      <section className="text-center mt-12">
        <p className="italic text-xl text-gray-600">
          “We built this platform to help ourselves, and now it's here to help you too.”
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
