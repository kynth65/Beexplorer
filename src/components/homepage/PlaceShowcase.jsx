import React from "react";
import Navbar from "../homepage/Navbar";
import sensouji from "../../assets/sensouji_dark.png";
import kamakura from "../../assets/kamakura.png";
import shibuya from "../../assets/shibuya_district.png";
import akihabara from "../../assets/akihabara.jpg";
import sensouji_temple from "../../assets/sensouji temple.png";

export default function PlaceShowcase() {
  return (
    <>
      <Navbar />
      <section className="py-16 md:py-24 md:pt-40 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Centered Text Content */}
          <div className="text-center mb-12">
            <h3 className="uppercase text-sm tracking-widest text-blue-600 mb-4 font-serif">
              TOKYO
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-gray-900 leading-tight">
              Ancient Traditions
              <br /> Meet Modern Tokyo
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>

          {/* Large Centered Image */}
          <div className="relative mx-auto max-w-3xl">
            <img
              src={sensouji}
              alt="Luxury Tokyo Experience"
              className="w-full h-auto object-cover"
            />

            {/* Optional caption or attribution in bottom right */}
            <div className="absolute bottom-4 right-4">
              <p className="text-xs text-gray-500 font-serif italic">
                Sensō-ji Temple, Asakusa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sensouji Temple Section - Side by Side Layout */}
      <section className="py-16 md:py-24 md:pt-40 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <img
                  src={sensouji_temple}
                  alt="Sensō-ji Temple Experience"
                  className="w-full h-[600px] object-cover"
                />
                {/* Optional caption */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs text-white font-serif italic drop-shadow-md">
                    Sensō-ji Temple, Asakusa
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Text Content */}
            <div className="order-1 md:order-2 px-4 md:px-12">
              <h2 className="text-4xl mb-10 md:text-5xl lg:text-8xl font-serif text-gray-900 leading-tight md:mb-16">
                Sensō-ji Temple
                <span className="text-blue-600">.</span>
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-10"></div>
              <p className="text-gray-700 text-lg max-w-xl mb-8">
                Discover Tokyo's oldest temple, where incense swirls through the
                air and centuries of history whisper through ornate halls.
                Sensō-ji offers a profound glimpse into Japan's spiritual
                heritage amidst the bustling energy of modern Tokyo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 md:pt-40 bg-neutral-50">
        {/* Image Container with Proper Height */}
        <div className="relative mx-auto max-w-7xl overflow-hidden h-[70vh] md:h-[80vh] border-l-4 border-blue-500">
          {/* Hero Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${shibuya})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Subtle Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
            }}
          ></div>
          <div className="absolute bottom-4 right-4">
            <p className="text-xs text-white font-serif italic">
              Shibuya District, Tokyo
            </p>
          </div>
        </div>

        {/* Content Below Image */}
        <div className="container mx-auto px-4 max-w-7xl mt-8 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Bottom Left - District Name */}
            <div className="order-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
                Shibuya District
                <span className="text-blue-600">.</span>
              </h2>
              <div className="w-16 h-1 bg-blue-500 mt-4 mb-6"></div>
            </div>
            {/* Bottom Right - Description */}
            <div className="order-2">
              <p className="text-gray-700 text-lg mb-4">
                Experience the electric energy of Tokyo's most iconic
                neighborhood. Famous for its bustling scramble crossing, vibrant
                nightlife, and cutting-edge fashion, Shibuya represents the
                heart of contemporary Japanese urban culture.
              </p>
              <p className="text-gray-700 text-lg">
                From world-class shopping and dining to hidden backstreets
                filled with local treasures, Shibuya offers endless discoveries
                for those seeking the pulse of modern Tokyo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 md:pt-40 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Centered Text Content */}
          <div className="text-center mb-12">
            <h3 className="uppercase text-sm tracking-widest text-blue-600 mb-4 font-serif">
              Discover the anime world
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-gray-900 leading-tight">
              Akihabara Electric Town
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
          </div>

          {/* Large Centered Image */}
          <div className="relative mx-auto max-w-5xl border-t-4 border-blue-500 pt-3">
            <img
              src={akihabara}
              alt="Luxury Tokyo Experience"
              className="w-full h-auto object-cover"
            />

            {/* Optional caption or attribution in bottom right */}
            <div className="absolute bottom-4 right-4">
              <p className="text-xs text-gray-500 font-serif italic">
                Akihabara, Tokyo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Visit Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-8">
            Plan Your Tokyo Adventure
            <span className="text-blue-600">.</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Ready to experience the magic of Tokyo? Our travel specialists can
            craft a personalized itinerary that combines iconic landmarks with
            hidden treasures.
          </p>
          <a
            href="/contact"
            className="inline-block border border-black text-black px-8 py-3 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all font-serif"
          >
            Start Planning
          </a>
        </div>
      </section>
    </>
  );
}
