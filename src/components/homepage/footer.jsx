import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 py-16 md:py-24 mt-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top section with main title */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Beexplorer
          </h2>
          <h3 className="text-xl md:text-2xl font-serif text-gray-700 mt-2">
            Experience the world with us
          </h3>
        </div>

        {/* Footer sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-10">
          {/* Contact section */}
          <div>
            <h4 className="uppercase text-sm tracking-widest text-gray-500 mb-8 font-serif">
              CONTACT
            </h4>
            <a className="block text-gray-700 hover:text-black mb-4 font-serif">
              Beexplorer@gmail.com
            </a>
            <a className="block text-gray-700 hover:text-black font-serif">
              +63 925 123 4567
            </a>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="uppercase text-sm tracking-widest text-gray-500 mb-8 font-serif">
              SITEMAP
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/gallery"
                  className="text-gray-700 hover:text-black font-serif"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/info"
                  className="text-gray-700 hover:text-black font-serif"
                >
                  Info
                </a>
              </li>
              <li>
                <a
                  href="/explore"
                  className="text-gray-700 hover:text-black font-serif"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-black font-serif"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="uppercase text-sm tracking-widest text-gray-500 mb-8 font-serif">
              SOCIALS
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61573821875423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black font-serif"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black font-serif"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black font-serif"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black font-serif"
                >
                  Savee
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="uppercase text-sm tracking-widest text-gray-500 mb-8 font-serif">
              LEGAL
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-700 hover:text-black font-serif"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-700 hover:text-black font-serif"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-serif">
            © {new Date().getFullYear()} Beexplorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
