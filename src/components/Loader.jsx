import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      {/* 3D Cube */}
      <div
        className="w-16 h-16 relative"
        style={{ perspective: "800px" }}
      >
        <div
          className="w-full h-full absolute"
          style={{
            transformStyle: "preserve-3d",
            animation: "spin3d 2s linear infinite",
          }}
        >
          {/* Cube faces */}
          <div className="absolute w-full h-full bg-blue-600/80 border border-blue-700" style={{ transform: "rotateX(0deg) translateZ(32px)" }}></div>
          <div className="absolute w-full h-full bg-blue-500/80 border border-blue-700" style={{ transform: "rotateY(90deg) translateZ(32px)" }}></div>
          <div className="absolute w-full h-full bg-blue-400/80 border border-blue-700" style={{ transform: "rotateY(180deg) translateZ(32px)" }}></div>
          <div className="absolute w-full h-full bg-blue-300/80 border border-blue-700" style={{ transform: "rotateY(270deg) translateZ(32px)" }}></div>
          <div className="absolute w-full h-full bg-blue-200/80 border border-blue-700" style={{ transform: "rotateX(90deg) translateZ(32px)" }}></div>
          <div className="absolute w-full h-full bg-blue-100/80 border border-blue-700" style={{ transform: "rotateX(-90deg) translateZ(32px)" }}></div>
        </div>
      </div>
      {/* Brand Name */}
      <span className="mt-4 text-xl font-bold text-blue-700 tracking-wide animate-pulse">
        DEVBUG
      </span>

      {/* Inline animation */}
      <style>
        {`
          @keyframes spin3d {
            0% { transform: rotateX(0deg) rotateY(0deg); }
            50% { transform: rotateX(180deg) rotateY(180deg); }
            100% { transform: rotateX(360deg) rotateY(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
