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
      {/* Hero Section */}
      <section className="py-16 md:py-24 md:pt-40 bg-neutral-50">
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
      <section className="py-8 md:py-16 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact Form */}
            <div className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-blue-500">
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
            </div>

            {/* Right side - Contact Information */}
            <div className="px-4 md:px-12">
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
                <h3 className="text-xl font-serif text-gray-900 mb-4">
                  Contact Details <span className="text-blue-600">.</span>
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
                <h3 className="text-xl font-serif text-gray-900 mb-4">
                  Office Location <span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-700 mb-2">
                  123 Traveler's Way, Suite 400
                </p>
                <p className="text-gray-700">New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="uppercase text-sm tracking-widest text-blue-600 mb-4 font-serif">
              QUESTIONS
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8 border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">
                How far in advance should I plan my trip?
              </h3>
              <p className="text-gray-700">
                We recommend planning at least 3-6 months in advance for most
                destinations, especially during peak seasons. For special events
                or particularly busy destinations, 6-12 months is preferable to
                secure the best accommodations and experiences.
              </p>
            </div>

            <div className="mb-8 border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-700">
                We accept all major credit cards, bank transfers, and digital
                payment options. A deposit is typically required to confirm your
                booking, with the balance due prior to your departure date.
              </p>
            </div>

            <div className="mb-8 border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">
                Can you accommodate special dietary requirements?
              </h3>
              <p className="text-gray-700">
                Absolutely. We work closely with our partners to accommodate any
                dietary restrictions or preferences. Please inform us of your
                needs when planning your trip so we can make appropriate
                arrangements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-4">
                What if I need to cancel or reschedule my trip?
              </h3>
              <p className="text-gray-700">
                We understand that plans can change. Our flexible booking policy
                allows for modifications up to 60 days before departure in most
                cases. Cancellation policies vary by destination and service
                provider, and we'll clearly communicate these details during the
                booking process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
