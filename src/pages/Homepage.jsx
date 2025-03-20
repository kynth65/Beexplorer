import React from "react";
import Hero from "../components/homepage/Hero";
import Navbar from "../components/homepage/Navbar";
import PlaceShowcase from "../components/homepage/PlaceShowcase";
import Footer from "../components/homepage/footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PlaceShowcase />
      <Footer />
    </>
  );
}
