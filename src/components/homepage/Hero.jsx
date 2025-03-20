import React from "react";
import HeroImage from "../../assets/sensouji_hero.png";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay with darker top 60% of the image */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.2) 100%)",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          {/* Small Header with text shadow */}
          <h2
            className="text-white uppercase tracking-widest text-sm md:text-base font-serif mb-2 drop-shadow-lg"
            style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}
          >
            BEEXPLORER
          </h2>

          {/* Main Header without text shadow */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
            Your Luxurious
            <br />
            Retreat in Tokyo
          </h1>

          {/* Inquire Button */}
          <button className="border border-white text-white px-8 py-3 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all font-serif mt-4 shadow-lg">
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
}
