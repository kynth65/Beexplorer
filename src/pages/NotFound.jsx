import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  // Set up the countdown and redirect
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    // Countdown timer
    const interval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    // Clean up timers when component unmounts
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  // Handle manual redirect
  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="bg-neutral-50 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-8">
          Not Available
        </h1>

        <p className="text-xl md:text-2xl font-serif text-gray-700 mb-6">
          THIS PAGE IS NOT DONE YET, PLEASE RETURN BACK
        </p>

        <p className="text-lg text-gray-600 mb-10">
          Redirecting to homepage in{" "}
          <span className="font-medium">{countdown}</span> seconds...
        </p>

        <button
          onClick={handleRedirect}
          className="border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all font-serif"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
