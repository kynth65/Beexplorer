import React, { useState } from "react";
// Import images directly
import akihabara from "../assets/akihabara.jpg";
import kamakura from "../assets/kamakura.png";
import Navbar from "../components/homepage/Navbar";

export default function LocationList() {
  const [hoveredId, setHoveredId] = useState(null);

  // Sample locations data - in a real app, you would import this or fetch from an API
  const locations = [
    {
      id: 1,
      name: "TOKYO",
      image: akihabara,
      description: "Experience ancient traditions in modern Japan",
    },
    {
      id: 2,
      name: "PARIS",
      image: kamakura,
      description: "Discover the city of lights and romance",
    },
    {
      id: 3,
      name: "MOJAVE",
      image: akihabara,
      description: "Explore the beautiful desert landscapes",
    },
    {
      id: 4,
      name: "SONOMA",
      image: kamakura,
      description: "Indulge in wine country elegance",
    },
    {
      id: 5,
      name: "MONTEREY",
      image: akihabara,
      description: "Experience coastal California charm",
    },
    {
      id: 6,
      name: "SEQUOIA",
      image: kamakura,
      description: "Walk among ancient giant trees",
    },
    // Additional locations would be added here
  ];

  return (
    <>
      <Navbar style={{ text: "text-black" }} />

      <section className="bg-white pt-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Heading */}
          <div className="text-center py-16">
            <h3 className="uppercase text-sm tracking-widest text-gray-500 mb-4 font-serif">
              DESTINATIONS
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-gray-900 leading-tight">
              Explore Our Locations
            </h2>
          </div>

          {/* Location list */}
          <div className="flex flex-col w-full">
            {locations.map((location) => (
              <div
                key={location.id}
                className="relative border-t border-gray-200 py-12 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredId(location.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image Container */}
                {hoveredId === location.id && (
                  <div
                    className="absolute inset-0 w-full h-full transition-all duration-300"
                    style={{
                      backgroundImage: `url(${location.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.3,
                    }}
                  ></div>
                )}

                {/* Location content */}
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black cursor-pointer">
                      {location.name}
                    </h3>

                    {/* Description that appears on hover - Always present but with varying opacity */}
                    <div
                      className="md:ml-auto max-w-md mt-4 md:mt-0 overflow-hidden"
                      style={{
                        opacity: hoveredId === location.id ? 1 : 0,
                        transform:
                          hoveredId === location.id
                            ? "translateY(0)"
                            : "translateY(10px)",
                        maxHeight: hoveredId === location.id ? "200px" : "0",
                        transition:
                          "opacity 600ms ease, transform 600ms ease, max-height 600ms ease",
                      }}
                    >
                      <p className="text-lg text-black font-serif">
                        {location.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all destinations link */}
          <div className="text-center py-16">
            <a
              href="/destinations"
              className="inline-block text-lg font-serif text-gray-900 hover:text-gray-700 border-b-2 border-gray-900 hover:border-gray-700 pb-1 transition-colors duration-300"
            >
              View All Destinations
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
