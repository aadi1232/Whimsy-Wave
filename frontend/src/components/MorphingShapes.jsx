import React, { useState, useEffect } from "react";

const MorphingShapes = () => {
  const [morphState, setMorphState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMorphState((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const shapes = [
    "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)", // Trapezoid
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // Diamond
    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)", // Hexagon
    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)", // Star
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gray-300 dark:border-gray-600 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-gray-400 dark:border-gray-500 rounded-lg rotate-45 animate-float-medium"></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-1/3 w-24 h-2 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 rounded-full animate-float-slow"></div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.6;
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-15px) rotate(50deg);
            opacity: 0.5;
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.7;
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MorphingShapes;
