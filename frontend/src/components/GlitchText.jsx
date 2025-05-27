import React, { useState, useEffect } from "react";

const GlitchText = ({ text, className = "" }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 200);
    }, 8000); // Less frequent, more subtle

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <span
        className={`transition-all duration-200 ${
          isAnimating ? "animate-pulse" : ""
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default GlitchText;
