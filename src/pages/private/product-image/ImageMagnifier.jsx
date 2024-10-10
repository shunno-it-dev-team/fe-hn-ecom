/* eslint-disable react/prop-types */
import { useState } from "react";

function ImageMagnifier({ imgUrl }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });

    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  return (
    <div
      className="img-magnifier-container"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
      style={{ position: "relative" }}
    >
      <img className="magnifier-img" src={imgUrl} alt="Product" />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 100}px`,
            pointerEvents: "none",
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            overflow: "hidden",
            border: "2px solid #000",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
            zIndex: 10,
          }}
        >
          <div
            className="magnifier-image"
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundSize: "800%",
              width: "200px",
              height: "200px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageMagnifier;
