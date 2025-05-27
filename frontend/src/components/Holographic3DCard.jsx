import React, { useState, useRef } from "react";

const Holographic3DCard = ({ children, className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    setMousePosition({ x: mouseX * 0.05, y: mouseY * 0.05 }); // Reduced intensity
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`transform-gpu transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${
          mousePosition.x
        }deg) translateZ(${isHovered ? "10px" : "0px"})`,
      }}
    >
      {/* Subtle glow effect */}
      {isHovered && (
        <div className="absolute inset-0 rounded-lg bg-gray-200/20 dark:bg-gray-700/20 blur-xl pointer-events-none"></div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Holographic3DCard;
