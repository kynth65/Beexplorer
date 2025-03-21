import React, { useState } from "react";
import Navbar from "../components/homepage/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      destination: "",
      message: "",
    });
    // Show success message (would implement in production)
  };

  return (
    <>
      <Navbar />
      {/* Hero Section with Travel Elements */}
      <section className="py-16 pt-40 md:py-24 bg-neutral-50 relative overflow-hidden">
        {/* Decorative airplane with dashed path */}
        <div className="absolute top-24 right-10 hidden md:block">
          <svg
            width="140"
            height="120"
            viewBox="0 0 140 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10,60 Q40,20 70,80 T130,40"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <g transform="translate(130, 40) rotate(-15)">
              <path d="M0,0 L8,3 L8,-3 Z" fill="#3B82F6" />
              <rect
                x="-15"
                y="-2"
                width="15"
                height="4"
                rx="1"
                fill="#3B82F6"
              />
              <path d="M-8,0 L-5,-5 L-3,-5 L-3,5 L-5,5 Z" fill="#3B82F6" />
            </g>
          </svg>
        </div>

        {/* World map outline element */}
        <div className="absolute bottom-10 left-10 hidden md:block opacity-20">
          <svg
            width="150"
            height="80"
            viewBox="0 0 150 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10,40 C20,45 25,30 30,35 C35,40 40,50 45,45 C50,40 55,30 65,35 C75,40 85,50 90,45 C95,40 100,30 105,25 C110,20 120,15 125,25 C130,35 140,40 145,35"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M20,20 C25,25 35,15 40,20 C45,25 55,30 60,25 C65,20 70,15 75,20 C80,25 90,30 95,25 C100,20 105,15 115,20"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M30,55 C40,50 50,60 55,50 C60,40 70,45 80,50 C90,55 100,45 110,50 C120,55 130,45 140,50"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          {/* Centered Text Content */}
          <div className="text-center mb-12">
            <h3 className="uppercase text-sm tracking-widest text-blue-600 mb-4 font-serif">
              GET IN TOUCH
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-gray-900 leading-tight">
              Plan Your Next
              <br /> Adventure
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 md:py-16 bg-neutral-50 relative">
        {/* Decorative airport elements */}
        <div className="absolute top-20 right-20 hidden md:block opacity-30">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20,80 L80,80" stroke="#3B82F6" strokeWidth="2" />
            <path d="M30,80 L30,70" stroke="#3B82F6" strokeWidth="2" />
            <path d="M50,80 L50,65" stroke="#3B82F6" strokeWidth="2" />
            <path d="M70,80 L70,75" stroke="#3B82F6" strokeWidth="2" />
            <path d="M25,70 L35,70" stroke="#3B82F6" strokeWidth="2" />
            <path d="M45,65 L55,65" stroke="#3B82F6" strokeWidth="2" />
            <path d="M65,75 L75,75" stroke="#3B82F6" strokeWidth="2" />
            <circle
              cx="50"
              cy="40"
              r="20"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
            <path d="M30,40 L70,40" stroke="#3B82F6" strokeWidth="2" />
            <path d="M50,20 L50,60" stroke="#3B82F6" strokeWidth="2" />
            <path d="M35,25 L65,55" stroke="#3B82F6" strokeWidth="2" />
            <path d="M35,55 L65,25" stroke="#3B82F6" strokeWidth="2" />
          </svg>
        </div>

        {/* Small flying airplane */}
        <div className="absolute bottom-40 left-10 hidden md:block">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(15, 15) rotate(25)">
              <path d="M0,0 L6,2 L6,-2 Z" fill="#3B82F6" opacity="0.7" />
              <rect
                x="-12"
                y="-1"
                width="12"
                height="2"
                rx="1"
                fill="#3B82F6"
                opacity="0.7"
              />
              <path
                d="M-6,0 L-4,-3 L-2,-3 L-2,3 L-4,3 Z"
                fill="#3B82F6"
                opacity="0.7"
              />
            </g>
            <path
              d="M3,15 Q8,10 13,15"
              stroke="#3B82F6"
              strokeWidth="1"
              strokeDasharray="2 1"
              opacity="0.7"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact Form */}
            <div className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-blue-500 relative">
              <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">
                Contact Us <span className="text-blue-600">.</span>
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-2 font-serif"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2 font-serif"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="destination"
                    className="block text-gray-700 mb-2 font-serif"
                  >
                    Interested Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:border-blue-500 bg-white"
                  >
                    <option value="">Select a destination</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Paris">Paris</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Bangkok">Bangkok</option>
                    <option value="Taipei">Taipei</option>
                    <option value="Bali">Bali</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 font-serif"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="border border-black text-black px-8 py-3 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all font-serif"
                >
                  Send Message
                </button>
              </form>

              {/* Decorative passport stamp */}
              <div className="absolute -bottom-5 -right-5 hidden md:block">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="28"
                    stroke="#3B82F6"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                    fill="none"
                    opacity="0.7"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="22"
                    stroke="#3B82F6"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.7"
                  />
                  <path
                    d="M18,30 L42,30"
                    stroke="#3B82F6"
                    strokeWidth="1"
                    opacity="0.7"
                  />
                  <path
                    d="M30,18 L30,42"
                    stroke="#3B82F6"
                    strokeWidth="1"
                    opacity="0.7"
                  />
                  <text x="23" y="27" fontSize="6" fill="#3B82F6" opacity="0.7">
                    BE
                  </text>
                  <text x="20" y="36" fontSize="6" fill="#3B82F6" opacity="0.7">
                    EXPLORER
                  </text>
                </svg>
              </div>
            </div>

            {/* Right side - Contact Information */}
            <div className="px-4 md:px-12 relative">
              <h2 className="text-4xl mb-10 md:text-5xl font-serif text-gray-900 leading-tight">
                Connect With Us
                <span className="text-blue-600">.</span>
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-10"></div>

              <div className="mb-12">
                <p className="text-gray-700 text-lg mb-6">
                  Our team of travel specialists is ready to help you craft the
                  perfect journey. Reach out to us through this form or using
                  the contact information below.
                </p>
                <p className="text-gray-700 text-lg">
                  We typically respond within 24 hours to all inquiries. For
                  urgent matters, please contact us by phone.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-gray-900 mb-4 flex items-center">
                  Contact Details <span className="text-blue-600">.</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18,5 L10,12 L2,5"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="2"
                      y="5"
                      width="16"
                      height="10"
                      rx="2"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </h3>
                <div className="mb-3">
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span>{" "}
                    info@beexplorer.com
                  </p>
                </div>
                <div className="mb-3">
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span> +1 (555)
                    123-4567
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="font-medium">Hours:</span> Monday–Friday,
                    9AM–6PM EST
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-gray-900 mb-4 flex items-center">
                  Office Location <span className="text-blue-600">.</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10,2 C6,2 3,5 3,9 C3,15 10,18 10,18 C10,18 17,15 17,9 C17,5 14,2 10,2 Z"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="10"
                      cy="9"
                      r="3"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </h3>
                <p className="text-gray-700 mb-2">
                  123 Traveler's Way, Suite 400
                </p>
                <p className="text-gray-700">New York, NY 10001</p>
              </div>

              {/* Decorative airplane routes */}
              <div className="absolute -bottom-10 right-0 hidden md:block opacity-20">
                <svg
                  width="140"
                  height="80"
                  viewBox="0 0 140 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="60" r="5" stroke="#3B82F6" fill="none" />
                  <circle cx="120" cy="20" r="5" stroke="#3B82F6" fill="none" />
                  <path
                    d="M25,60 Q70,10 115,20"
                    stroke="#3B82F6"
                    strokeDasharray="4 2"
                    fill="none"
                  />
                  <g transform="translate(70, 35) rotate(-25)">
                    <path d="M0,0 L4,1.5 L4,-1.5 Z" fill="#3B82F6" />
                    <rect
                      x="-8"
                      y="-1"
                      width="8"
                      height="2"
                      rx="1"
                      fill="#3B82F6"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support Section with Travel Elements */}
      <section className="py-16 md:py-24 bg-neutral-50 relative">
        {/* Decorative dotted grid pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="travelDots"
              patternUnits="userSpaceOnUse"
              width="30"
              height="30"
            >
              <circle cx="15" cy="15" r="1" fill="#3B82F6" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#travelDots)" />
          </svg>
        </div>

        {/* Small flying airplanes */}
        <div className="absolute top-20 left-20 hidden md:block">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(10, 10) rotate(215)">
              <path d="M0,0 L4,1.5 L4,-1.5 Z" fill="#3B82F6" opacity="0.6" />
              <rect
                x="-8"
                y="-1"
                width="8"
                height="2"
                rx="1"
                fill="#3B82F6"
                opacity="0.6"
              />
            </g>
          </svg>
        </div>

        <div className="absolute bottom-10 right-40 hidden md:block">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(7.5, 7.5) rotate(145)">
              <path d="M0,0 L3,1 L3,-1 Z" fill="#3B82F6" opacity="0.6" />
              <rect
                x="-6"
                y="-0.75"
                width="6"
                height="1.5"
                rx="0.75"
                fill="#3B82F6"
                opacity="0.6"
              />
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-8">
            Need More Information?
            <span className="text-blue-600">.</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Check out our FAQs page for answers to common questions, or reach
            out directly if you need personalized assistance with planning your
            journey.
          </p>
          <a
            href="/faqs"
            className="inline-block border border-black text-black px-8 py-3 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all font-serif mr-4"
          >
            View FAQs
          </a>
        </div>
      </section>
    </>
  );
}
