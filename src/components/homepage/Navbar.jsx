import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Timer to control navbar reappearance
    let navTimer;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide the navbar
        setShow(false);
        // Close mobile menu when scrolling down
        setIsMobileMenuOpen(false);
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

    // Close mobile menu on window resize (if screen becomes larger)
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
      window.removeEventListener("resize", handleResize);
      clearTimeout(navTimer);
    };
  }, [lastScrollY]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
      <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl sm:text-3xl font-serif text-black z-30">
          Beexplorer
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-30 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-2.5" : "rotate-0"
              }`}
              style={{ top: "0" }}
            ></span>
            <span
              className={`absolute h-0.5 bg-black transform transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
              }`}
              style={{ top: "50%", marginTop: "-1px" }}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : "rotate-0"
              }`}
              style={{ bottom: "0" }}
            ></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            <a
              href="/locations"
              className="text-black hover:opacity-90 font-serif relative group"
            >
              <span>Locations</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/info"
              className="text-black hover:opacity-90 font-serif relative group"
            >
              <span>Info</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/contact"
              className="text-black hover:opacity-90 font-serif relative group"
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/faqs"
              className="text-black hover:opacity-90 font-serif relative group"
            >
              <span>FAQs</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Inquire Button - Desktop Only */}
          <a
            href="/contact"
            className="border border-black text-black hover:bg-black hover:text-white rounded-full px-5 py-2 transition-colors font-serif"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <div
          className={`fixed inset-0 md:hidden flex flex-col justify-center items-center z-20 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "transform translate-y-100 opacity-100"
              : "transform -translate-y-full opacity-0 pointer-events-none"
          }`}
          style={{ paddingTop: "0" }}
        >
          <nav className="flex flex-col bg-white space-y-10 py-10 items-center max-w-sm w-full px-6">
            <a
              href="/locations"
              className="text-3xl text-black font-serif relative group w-full text-center py-3 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Locations</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/info"
              className="text-3xl text-black font-serif relative group w-full text-center py-3 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Info</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/contact"
              className="text-3xl text-black font-serif relative group w-full text-center py-3 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/faqs"
              className="text-3xl text-black font-serif relative group w-full text-center py-3 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>FAQs</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Mobile Inquire Button */}
            <a
              href="/contact"
              className="mt-6 border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-8 py-4 transition-colors font-serif text-xl w-full text-center cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inquire
            </a>
          </nav>
        </div>
      </div>

      {/* Add keyframes animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease forwards;
        }
      `}</style>
    </header>
  );
}
