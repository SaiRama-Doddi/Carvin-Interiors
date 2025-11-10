import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingButtons: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  // WhatsApp click handler
  const handleWhatsApp = () => {
    const phoneNumber = "919398360804"; // e.g. "919876543210"
    const message = "Hello! I would like to know more about your services.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show scroll button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-24 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 z-40 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-9 h-9" />
      </button>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-44 right-8 bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 hover:scale-110 transition-transform duration-300 z-40 cursor-pointer"
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
