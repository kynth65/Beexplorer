import React from "react";
import Navbar from "../components/homepage/Navbar";

export default function FAQs() {
  return (
    <>
      <Navbar />

      {/* FAQ Hero Section */}
      <section className="py-16 pt-40 md:pt-44 md:py-24 bg-neutral-50">
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 border-b border-gray-200 pb-12">
              <h3 className="text-2xl font-serif text-gray-900 mb-6">
                Trip Planning <span className="text-blue-600">.</span>
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

            <div className="mb-12 border-b border-gray-200 pb-12">
              <h3 className="text-2xl font-serif text-gray-900 mb-6">
                Bookings & Payments <span className="text-blue-600">.</span>
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

            <div className="mb-12 border-b border-gray-200 pb-12">
              <h3 className="text-2xl font-serif text-gray-900 mb-6">
                During Your Trip <span className="text-blue-600">.</span>
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

            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-6">
                Still Have Questions? <span className="text-blue-600">.</span>
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
