import React, { useEffect, useState } from "react";

const Loader = () => {
  const [size, setSize] = useState(64);

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 360) setSize(44);
      else if (w < 480) setSize(52);
      else if (w < 768) setSize(60);
      else if (w < 1024) setSize(72);
      else setSize(88);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const half = size / 2;

  const faces = [
    { style: { transform: `rotateX(0deg) translateZ(${half}px)` },      className: "bg-blue-600/80 border-blue-700" },
    { style: { transform: `rotateY(90deg) translateZ(${half}px)` },      className: "bg-blue-500/80 border-blue-700" },
    { style: { transform: `rotateY(180deg) translateZ(${half}px)` },     className: "bg-blue-400/80 border-blue-700" },
    { style: { transform: `rotateY(270deg) translateZ(${half}px)` },     className: "bg-blue-300/80 border-blue-700" },
    { style: { transform: `rotateX(90deg) translateZ(${half}px)` },      className: "bg-blue-200/80 border-blue-700" },
    { style: { transform: `rotateX(-90deg) translateZ(${half}px)` },     className: "bg-blue-100/80 border-blue-700" },
  ];

  const labelSize = Math.max(12, Math.round(size * 0.22));
  const marginTop  = Math.round(size * 0.22);

  return (
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">

      {/* 3D Cube — size driven by JS state */}
      <div
        style={{
          width: size,
          height: size,
          perspective: size * 12,
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            transformStyle: "preserve-3d",
            animation: "spin3d 2s linear infinite",
          }}
        >
          {faces.map((face, i) => (
            <div
              key={i}
              className={`absolute border ${face.className}`}
              style={{
                width: "100%",
                height: "100%",
                ...face.style,
              }}
            />
          ))}
        </div>
      </div>

      {/* Brand name — scales with cube */}
      <span
        className="font-bold text-blue-700 tracking-wide animate-pulse"
        style={{
          marginTop,
          fontSize: labelSize,
        }}
      >
        DEVBUG
      </span>

      <style>{`
        @keyframes spin3d {
          0%   { transform: rotateX(0deg)   rotateY(0deg); }
          50%  { transform: rotateX(180deg) rotateY(180deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;