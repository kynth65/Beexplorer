import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);

  useEffect(() => {
    // Timer to control navbar reappearance
    let navTimer;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide the navbar
        setShow(false);
      } else {
        // Scrolling up - set a timer to show the navbar
        clearTimeout(navTimer);
        navTimer = setTimeout(() => {
          setShow(true);
          setAnimateIn(true);
        }, 1000);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    // Force the initial animation by briefly setting to hidden then visible
    setShow(false);
    setTimeout(() => {
      setShow(true);
      setAnimateIn(true);
    }, 500);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
      clearTimeout(navTimer);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-neutral-50 border-b ${
        show
          ? animateIn
            ? "animate-slideDown"
            : "transform translate-y-0"
          : "transform -translate-y-full"
      }`}
      onAnimationEnd={() => setAnimateIn(false)}
    >
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-3xl font-serif text-black">
          Beexplorer
        </a>

        {/* Navigation */}
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8">
            <a
              href="/locations"
              className="text-black hover:opacity-80 font-serif"
            >
              Locations
            </a>
            <a href="/info" className="text-black hover:opacity-80 font-serif">
              Info
            </a>
            <a
              href="/explore"
              className="text-black hover:opacity-80 font-serif"
            >
              Explore
            </a>
            <a
              href="/contact"
              className="text-black hover:opacity-80 font-serif"
            >
              Contact
            </a>
          </nav>

          {/* Inquire Button */}
          <button className="border border-black text-black hover:bg-black hover:text-white rounded-full px-6 py-2 transition-colors font-serif">
            Inquire
          </button>
        </div>
      </div>
    </header>
  );
}
