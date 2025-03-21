import React from "react";
import Navbar from "../components/homepage/Navbar";

export default function Info() {
  return (
    <>
      <Navbar />
      {/* About Us Section */}
      <section className="py-16 md:py-24 md:pt-40 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Centered Text Content */}
          <div className="text-center mb-12">
            <h3 className="uppercase text-sm tracking-widest text-blue-600 mb-4 font-serif">
              ABOUT US
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-gray-900 leading-tight">
              Discover the World
              <br /> With BeExplorer
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>

          {/* Main content */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              BeExplorer is a premium travel agency dedicated to crafting
              unforgettable journeys that blend luxury, adventure, and authentic
              cultural experiences. Founded in 2018, we've been helping
              travelers discover the world's most captivating destinations with
              personalized itineraries and exceptional service.
            </p>
            <p className="text-lg text-gray-700 mb-12">
              Our team of experienced travel specialists has explored every
              corner of the globe, building relationships with local guides and
              uncovering hidden gems that transform ordinary trips into
              extraordinary adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text Content */}
            <div className="px-4 md:px-12">
              <h2 className="text-4xl mb-10 md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight md:mb-16">
                Our Philosophy
                <span className="text-blue-600">.</span>
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-10"></div>
              <p className="text-gray-700 text-lg max-w-xl mb-6">
                At BeExplorer, we believe travel is more than just visiting new
                places — it's about creating meaningful connections, embracing
                different cultures, and returning home transformed.
              </p>
              <p className="text-gray-700 text-lg max-w-xl mb-8">
                Each journey we design is thoughtfully crafted to balance iconic
                landmarks with off-the-beaten-path experiences, luxury
                accommodations with authentic local encounters, and guided
                excursions with time for personal discovery.
              </p>
            </div>

            {/* Right side - Services */}
            <div className="bg-white p-8 shadow-sm border-t-4 border-blue-500">
              <h3 className="text-2xl font-serif text-gray-900 mb-8">
                Our Services <span className="text-blue-600">.</span>
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-serif text-gray-800 mb-2">
                  Personalized Itineraries
                </h4>
                <p className="text-gray-700">
                  Tailor-made travel plans designed around your interests,
                  preferences, and pace.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-serif text-gray-800 mb-2">
                  Luxury Accommodations
                </h4>
                <p className="text-gray-700">
                  Carefully selected hotels, resorts, and unique properties that
                  enhance your experience.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-serif text-gray-800 mb-2">
                  Expert Guides
                </h4>
                <p className="text-gray-700">
                  Connect with knowledgeable local guides who bring destinations
                  to life.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-serif text-gray-800 mb-2">
                  24/7 Support
                </h4>
                <p className="text-gray-700">
                  Travel with confidence knowing our team is always available to
                  assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Centered Text Content */}
          <div className="text-center mb-16">
            <h3 className="uppercase text-sm tracking-widest text-blue-600 mb-4 font-serif">
              TESTIMONIALS
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
              Client Experiences
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-sm relative">
              <div className="absolute top-0 left-0 w-1/3 h-1 bg-blue-500"></div>
              <p className="text-gray-700 text-lg italic mb-6">
                "BeExplorer transformed our family vacation into an adventure
                we'll cherish forever. Their attention to detail and insider
                knowledge of Tokyo made all the difference."
              </p>
              <p className="font-serif text-gray-900">— Sarah & James L.</p>
            </div>

            <div className="bg-white p-8 shadow-sm relative">
              <div className="absolute top-0 left-0 w-1/3 h-1 bg-blue-500"></div>
              <p className="text-gray-700 text-lg italic mb-6">
                "The personalized itinerary for our Bali trip was perfect. We
                experienced the culture, relaxation, and adventure in perfect
                balance."
              </p>
              <p className="font-serif text-gray-900">— Michael T.</p>
            </div>

            <div className="bg-white p-8 shadow-sm relative">
              <div className="absolute top-0 left-0 w-1/3 h-1 bg-blue-500"></div>
              <p className="text-gray-700 text-lg italic mb-6">
                "As solo travelers, we were hesitant about using an agency, but
                BeExplorer gave us the perfect mix of structure and freedom in
                Paris."
              </p>
              <p className="font-serif text-gray-900">— Eliza R.</p>
            </div>

            <div className="bg-white p-8 shadow-sm relative">
              <div className="absolute top-0 left-0 w-1/3 h-1 bg-blue-500"></div>
              <p className="text-gray-700 text-lg italic mb-6">
                "The hidden gems in Singapore that our BeExplorer guide showed
                us were the highlight of our trip. These are places we would
                never have found on our own."
              </p>
              <p className="font-serif text-gray-900">— David & Lisa K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-8">
            Start Your Journey
            <span className="text-blue-600">.</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Ready to explore the world with us? Contact our team of travel
            specialists to begin planning your next unforgettable adventure.
          </p>
          <a
            href="/contact"
            className="inline-block border border-black text-black px-8 py-3 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all font-serif"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
