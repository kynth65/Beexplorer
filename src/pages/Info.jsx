import React from "react";
import Navbar from "../components/homepage/Navbar";

export default function Info() {
  return (
    <>
      <Navbar />
      {/* About Us Section with Decorative Travel Elements */}
      <section className="py-16 pt-40 md:py-24 bg-neutral-50 relative overflow-hidden">
        {/* Decorative airplane with dashed path */}
        <div className="absolute top-20 right-0 hidden md:block">
          <svg
            width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10,50 Q30,30 50,50 T90,50"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <path
              d="M90,50 L110,50"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <path
              d="M20,20 L10,50"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <g transform="translate(90, 50) rotate(0)">
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

        {/* Decorative compass element */}
        <div className="absolute bottom-20 left-10 hidden md:block opacity-40">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="39" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="40" cy="40" r="5" fill="#3B82F6" />
            <path d="M40,5 L40,15" stroke="#3B82F6" strokeWidth="2" />
            <path d="M40,65 L40,75" stroke="#3B82F6" strokeWidth="2" />
            <path d="M5,40 L15,40" stroke="#3B82F6" strokeWidth="2" />
            <path d="M65,40 L75,40" stroke="#3B82F6" strokeWidth="2" />
            <path d="M40,5 L45,10 L35,10 Z" fill="#3B82F6" />
            <text x="38" y="20" fontSize="8" fontWeight="bold" fill="#3B82F6">
              N
            </text>
            <text x="38" y="70" fontSize="8" fontWeight="bold" fill="#3B82F6">
              S
            </text>
            <text x="70" y="43" fontSize="8" fontWeight="bold" fill="#3B82F6">
              E
            </text>
            <text x="10" y="43" fontSize="8" fontWeight="bold" fill="#3B82F6">
              W
            </text>
          </svg>
        </div>

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

      {/* Our Philosophy Section with Travel Elements */}
      <section className="py-16 md:py-24 bg-neutral-50 relative">
        {/* Decorative airplane with dashed path */}
        <div className="absolute bottom-10 right-10 hidden md:block">
          <svg
            width="150"
            height="100"
            viewBox="0 0 150 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10,70 Q50,20 100,80 T140,30"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <g transform="translate(140, 30) rotate(-15)">
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

        {/* Map pin element */}
        <div className="absolute top-40 left-10 hidden md:block">
          <svg
            width="40"
            height="50"
            viewBox="0 0 40 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20,0 C9,0 0,9 0,20 C0,35 20,50 20,50 C20,50 40,35 40,20 C40,9 31,0 20,0 Z"
              fill="#E5E7EB"
            />
            <path
              d="M20,5 C11.7,5 5,11.7 5,20 C5,32 20,45 20,45 C20,45 35,32 35,20 C35,11.7 28.3,5 20,5 Z"
              fill="#EBF2FF"
            />
            <circle cx="20" cy="20" r="7" fill="#3B82F6" />
          </svg>
        </div>

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
            <div className="bg-white p-8 shadow-sm border-t-4 border-blue-500 relative">
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

              {/* Decorative luggage icon */}
              <div className="absolute -bottom-4 -right-4 bg-blue-500 rounded-full p-2 shadow-md hidden md:block">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6,8 L6,20 L18,20 L18,8 Z"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M8,8 L8,5 C8,3.9 8.9,3 10,3 L14,3 C15.1,3 16,3.9 16,5 L16,8"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path d="M4,20 L20,20" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Travel Expertise Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="uppercase text-sm tracking-widest text-blue-600 mb-4 font-serif">
              TRAVEL EXPERIENCES
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Crafting Unforgettable Journeys
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Experience Card 1 */}
            <div className="group relative overflow-hidden rounded-sm bg-white shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden bg-blue-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h4 className="text-xl text-white font-serif mb-2">
                    Cultural Immersion
                  </h4>
                  <div className="w-10 h-0.5 bg-blue-500"></div>
                </div>
                <div className="absolute top-0 right-0 p-3 z-20 bg-blue-600 bg-opacity-90 uppercase text-xs font-medium tracking-wider text-white">
                  Popular
                </div>
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/api/placeholder/800/500')" }}
                ></div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Authentic experiences that connect you with local traditions,
                  cuisines, and ways of life around the world.
                </p>
                <a
                  href="/destinations"
                  className="text-blue-600 font-serif inline-flex items-center"
                >
                  Explore More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="group relative overflow-hidden rounded-sm bg-white shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden bg-blue-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h4 className="text-xl text-white font-serif mb-2">
                    Luxury Escapes
                  </h4>
                  <div className="w-10 h-0.5 bg-blue-500"></div>
                </div>
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/api/placeholder/800/500')" }}
                ></div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Indulgent retreats featuring premium accommodations, private
                  transfers, and exclusive experiences in stunning locations.
                </p>
                <a
                  href="/destinations"
                  className="text-blue-600 font-serif inline-flex items-center"
                >
                  Explore More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Experience Card 3 */}
            <div className="group relative overflow-hidden rounded-sm bg-white shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden bg-blue-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h4 className="text-xl text-white font-serif mb-2">
                    Adventure Journeys
                  </h4>
                  <div className="w-10 h-0.5 bg-blue-500"></div>
                </div>
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/api/placeholder/800/500')" }}
                ></div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Thrilling experiences for the adventurous traveler, from
                  hiking hidden trails to exploring remote landscapes.
                </p>
                <a
                  href="/destinations"
                  className="text-blue-600 font-serif inline-flex items-center"
                >
                  Explore More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Travel Elements */}
      <section className="py-16 md:py-24 bg-neutral-50 relative">
        {/* Decorative plane path pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="planePath"
              patternUnits="userSpaceOnUse"
              width="200"
              height="200"
              patternTransform="rotate(10)"
            >
              <path
                d="M0,50 Q50,0 100,50 T200,50"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="5 3"
                fill="none"
              />
              <path
                d="M0,150 Q50,100 100,150 T200,150"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="5 3"
                fill="none"
              />
              <g transform="translate(180, 50) rotate(0)">
                <path d="M0,0 L5,2 L5,-2 Z" fill="#3B82F6" />
              </g>
              <g transform="translate(180, 150) rotate(0)">
                <path d="M0,0 L5,2 L5,-2 Z" fill="#3B82F6" />
              </g>
            </pattern>
            <rect width="100%" height="100%" fill="url(#planePath)" />
          </svg>
        </div>

        {/* Globe icon - top right */}
        <div className="absolute top-10 right-10 hidden md:block opacity-40">
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
              r="29"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M30,1 C30,1 30,59 30,59"
              stroke="#3B82F6"
              strokeWidth="1"
            />
            <path
              d="M1,30 C1,30 59,30 59,30"
              stroke="#3B82F6"
              strokeWidth="1"
            />
            <path
              d="M8,15 C8,15 52,15 52,15"
              stroke="#3B82F6"
              strokeWidth="1"
            />
            <path
              d="M8,45 C8,45 52,45 52,45"
              stroke="#3B82F6"
              strokeWidth="1"
            />
            <path
              d="M15,8 C20,20 20,40 15,52"
              stroke="#3B82F6"
              strokeWidth="1"
            />
            <path
              d="M45,8 C40,20 40,40 45,52"
              stroke="#3B82F6"
              strokeWidth="1"
            />
          </svg>
        </div>

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

      {/* Contact Section with Travel Elements */}
      <section className="py-16 md:py-24 bg-neutral-50 relative">
        {/* Decorative airplane path - circular */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100,200 A300,150 0 1,1 900,200"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="10 5"
              fill="none"
              opacity="0.3"
            />
            <g transform="translate(900, 200) rotate(-5)">
              <path d="M0,0 L10,4 L10,-4 Z" fill="#3B82F6" opacity="0.5" />
              <rect
                x="-20"
                y="-2"
                width="20"
                height="4"
                rx="1"
                fill="#3B82F6"
                opacity="0.5"
              />
              <path
                d="M-10,0 L-7,-6 L-4,-6 L-4,6 L-7,6 Z"
                fill="#3B82F6"
                opacity="0.5"
              />
            </g>
          </svg>
        </div>

        {/* Small aircraft elements */}
        <div className="absolute top-20 left-20 hidden md:block">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(15, 15) rotate(45)">
              <path d="M0,0 L6,2 L6,-2 Z" fill="#3B82F6" opacity="0.5" />
              <rect
                x="-12"
                y="-1"
                width="12"
                height="2"
                rx="1"
                fill="#3B82F6"
                opacity="0.5"
              />
              <path
                d="M-6,0 L-4,-3 L-2,-3 L-2,3 L-4,3 Z"
                fill="#3B82F6"
                opacity="0.5"
              />
            </g>
          </svg>
        </div>

        <div className="absolute bottom-40 right-40 hidden md:block">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(10, 10) rotate(-25)">
              <path d="M0,0 L4,1.5 L4,-1.5 Z" fill="#3B82F6" opacity="0.5" />
              <rect
                x="-8"
                y="-1"
                width="8"
                height="2"
                rx="1"
                fill="#3B82F6"
                opacity="0.5"
              />
              <path
                d="M-4,0 L-3,-2 L-2,-2 L-2,2 L-3,2 Z"
                fill="#3B82F6"
                opacity="0.5"
              />
            </g>
          </svg>
        </div>

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
