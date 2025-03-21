import React from "react";
import Navbar from "../components/homepage/Navbar";

export default function FAQs() {
  return (
    <>
      <Navbar />

      {/* FAQ Hero Section with Travel Elements */}
      <section className="py-16 pt-40 md:pt-44 md:py-24 bg-neutral-50 relative overflow-hidden">
        {/* Decorative airplane with dashed path */}
        <div className="absolute top-20 right-10 hidden md:block">
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

        {/* Compass element */}
        <div className="absolute bottom-10 left-10 hidden md:block opacity-30">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="29" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="30" cy="30" r="5" fill="#3B82F6" />
            <path d="M30,1 L30,10" stroke="#3B82F6" strokeWidth="2" />
            <path d="M30,50 L30,59" stroke="#3B82F6" strokeWidth="2" />
            <path d="M1,30 L10,30" stroke="#3B82F6" strokeWidth="2" />
            <path d="M50,30 L59,30" stroke="#3B82F6" strokeWidth="2" />
            <path d="M30,1 L33,5 L27,5 Z" fill="#3B82F6" />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          {/* Centered Text Content */}
          <div className="text-center mb-12">
            <h3 className="uppercase text-sm tracking-widest text-blue-600 mb-4 font-serif">
              HELP CENTER
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-gray-900 leading-tight">
              Frequently Asked
              <br /> Questions
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Travel Elements */}
      <section className="py-16 md:py-24 bg-neutral-50 relative">
        {/* Decorative dotted world map background */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="mapDots"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
            >
              <circle cx="20" cy="20" r="1" fill="#3B82F6" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#mapDots)" />
          </svg>
        </div>

        {/* Small airplane - top right */}
        <div className="absolute top-40 right-20 hidden md:block">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(12.5, 12.5) rotate(215)">
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

        {/* Small airplane - bottom left */}
        <div className="absolute bottom-60 left-10 hidden md:block">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(10, 10) rotate(45)">
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

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 border-b border-gray-200 pb-12 relative">
              <h3 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
                Trip Planning <span className="text-blue-600">.</span>
                <svg
                  className="ml-3 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10,1 C14.4183,1 18,4.58172 18,9 C18,13.4183 14.4183,17 10,17 C5.58172,17 2,13.4183 2,9 C2,4.58172 5.58172,1 10,1 Z"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M10,5 L10,9 L13,11"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-serif text-gray-900 mb-4">
                  How far in advance should I plan my trip?
                </h4>
                <p className="text-gray-700">
                  We recommend planning at least 3-6 months in advance for most
                  destinations, especially during peak seasons. For special
                  events or particularly busy destinations, 6-12 months is
                  preferable to secure the best accommodations and experiences.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-serif text-gray-900 mb-4">
                  What destinations do you specialize in?
                </h4>
                <p className="text-gray-700">
                  We specialize in curated experiences across Asia, Europe, and
                  Oceania, with particular expertise in Tokyo, Paris, Singapore,
                  Bangkok, Taipei, and Bali. However, our network extends
                  globally, and we're equipped to craft exceptional journeys to
                  destinations worldwide.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-serif text-gray-900 mb-4">
                  Can you help with group travel arrangements?
                </h4>
                <p className="text-gray-700">
                  Absolutely! We excel at organizing group travel for families,
                  friends, corporate retreats, and special celebrations. Our
                  team can accommodate groups of various sizes, creating
                  itineraries that balance shared experiences with opportunities
                  for individual exploration.
                </p>
              </div>
            </div>

            <div className="mb-12 border-b border-gray-200 pb-12 relative">
              <h3 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
                Bookings & Payments <span className="text-blue-600">.</span>
                <svg
                  className="ml-3 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="5"
                    width="14"
                    height="10"
                    rx="2"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M7,10 L13,10"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7,7 L10,7"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7,13 L11,13"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-serif text-gray-900 mb-4">
                  What payment methods do you accept?
                </h4>
                <p className="text-gray-700">
                  We accept all major credit cards, bank transfers, and digital
                  payment options. A deposit is typically required to confirm
                  your booking, with the balance due prior to your departure
                  date.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-serif text-gray-900 mb-4">
                  What is included in the cost of my trip?
                </h4>
                <p className="text-gray-700">
                  Our packages typically include accommodations, guided
                  experiences, designated transportation, and select meals. We
                  provide detailed cost breakdowns so you understand exactly
                  what's included. Additional services like travel insurance and
                  international flights can be arranged upon request.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-serif text-gray-900 mb-4">
                  What if I need to cancel or reschedule my trip?
                </h4>
                <p className="text-gray-700">
                  We understand that plans can change. Our flexible booking
                  policy allows for modifications up to 60 days before departure
                  in most cases. Cancellation policies vary by destination and
                  service provider, and we'll clearly communicate these details
                  during the booking process.
                </p>
              </div>
            </div>

            <div className="mb-12 border-b border-gray-200 pb-12 relative">
              <h3 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
                During Your Trip <span className="text-blue-600">.</span>
                <svg
                  className="ml-3 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10,2 C6,2 3,5 3,9 C3,15 10,18 10,18 C10,18 17,15 17,9 C17,5 14,2 10,2 Z"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle
                    cx="10"
                    cy="9"
                    r="3"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-serif text-gray-900 mb-4">
                  Can you accommodate special dietary requirements?
                </h4>
                <p className="text-gray-700">
                  Absolutely. We work closely with our partners to accommodate
                  any dietary restrictions or preferences. Please inform us of
                  your needs when planning your trip so we can make appropriate
                  arrangements.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-serif text-gray-900 mb-4">
                  What happens if there's an emergency during my trip?
                </h4>
                <p className="text-gray-700">
                  Your safety is our priority. All clients receive 24/7
                  emergency contact information for both local representatives
                  and our operations team. We maintain close relationships with
                  local services in all our destinations, ensuring quick
                  responses to any situation that may arise.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-serif text-gray-900 mb-4">
                  Will I have a local guide throughout my trip?
                </h4>
                <p className="text-gray-700">
                  This depends on your preferences. We can arrange full-time
                  guides, guides for specific experiences only, or a self-guided
                  itinerary with detailed recommendations. Our most popular
                  option is a balanced approach with guided activities
                  interspersed with free time for personal exploration.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Decorative curved flight path near the contact section */}
              <div className="absolute -top-10 -right-20 hidden md:block opacity-20">
                <svg
                  width="120"
                  height="80"
                  viewBox="0 0 120 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10,40 Q40,10 60,40 T110,30"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                  />
                  <g transform="translate(110, 30) rotate(-10)">
                    <path d="M0,0 L6,2 L6,-2 Z" fill="#3B82F6" />
                  </g>
                </svg>
              </div>

              <h3 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
                Still Have Questions? <span className="text-blue-600">.</span>
                <svg
                  className="ml-3 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M10,6 L10,10"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="10" cy="14" r="1" fill="#3B82F6" />
                </svg>
              </h3>
              <p className="text-gray-700 mb-8">
                If you can't find the answer you're looking for, our team is
                always ready to help. Contact us directly for personalized
                assistance with any questions you may have about your travel
                plans.
              </p>
              <a
                href="/contact"
                className="inline-block border border-black text-black px-8 py-3 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all font-serif"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
