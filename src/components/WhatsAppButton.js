import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5561985736330"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-13 h-13 flex items-center justify-center rounded-full shadow-lg shadow-black/30 hover:scale-110 transition-transform"
      style={{ width: "52px", height: "52px", background: "#25d366" }}
      aria-label="WhatsApp"
    >
      <i className="fab fa-whatsapp text-white text-2xl" />
    </a>
  );
}
