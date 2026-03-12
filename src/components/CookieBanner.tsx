"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-xs bg-primary text-primary-foreground p-4 rounded-lg shadow-lg font-['Special_Elite']">
      <p className="text-xs leading-relaxed mb-3">
        This site uses cookies to improve your experience.
      </p>
      <button
        onClick={accept}
        className="bg-background text-foreground text-xs px-4 py-1.5 rounded hover:opacity-80 transition-opacity"
      >
        Accept
      </button>
    </div>
  );
}
