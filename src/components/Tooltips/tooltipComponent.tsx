import React, { useState } from "react";

const TooltipComponent = ({ tooltipText, child }: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (event: any) => {
    setPosition({
      x: event.clientX + 10,
      y: event.clientY + 10,
    });
  };

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="container-tooltip"
    >
      <>
        {isVisible && (
          <div
            className="block-tooltip"
            style={{
              top: `${position.y}px`,
              left: `${position.x}px`,
            }}
          >
            {tooltipText}
          </div>
        )}
        {child}
      </>
    </div>
  );
};

export default TooltipComponent;
