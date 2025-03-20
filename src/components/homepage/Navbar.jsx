import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    // Timer to control navbar reappearance
    let navTimer;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const heroHeight =
        document.querySelector('div[class*="h-screen"]')?.offsetHeight || 700;

      // Check if we've scrolled past the hero section
      if (currentScrollY > heroHeight - 100) {
        setPastHero(true);
      } else {
        setPastHero(false);
      }

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        show
          ? animateIn
            ? "animate-slideDown"
            : "transform translate-y-0"
          : "transform -translate-y-full"
      } ${pastHero ? "bg-neutral-50 border-b" : "bg-transparent"}`}
      onAnimationEnd={() => setAnimateIn(false)}
    >
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className={`text-3xl font-serif ${
            pastHero ? "text-black" : "text-white"
          }`}
        >
          Beexplorer
        </a>

        {/* Navigation */}
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8">
            <a
              href="/locations"
              className={`hover:opacity-80 font-serif ${
                pastHero ? "text-black" : "text-white"
              }`}
            >
              Locations
            </a>
            <a
              href="/info"
              className={`hover:opacity-80 font-serif ${
                pastHero ? "text-black" : "text-white"
              }`}
            >
              Info
            </a>
            <a
              href="/explore"
              className={`hover:opacity-80 font-serif ${
                pastHero ? "text-black" : "text-white"
              }`}
            >
              Explore
            </a>
            <a
              href="/contact"
              className={`hover:opacity-80 font-serif ${
                pastHero ? "text-black" : "text-white"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Inquire Button */}
          <button
            className={`border rounded-full px-6 py-2 transition-colors font-serif
              ${
                pastHero
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white text-white hover:bg-white hover:bg-opacity-20"
              }`}
          >
            Inquire
          </button>
        </div>
      </div>
    </header>
  );
}
