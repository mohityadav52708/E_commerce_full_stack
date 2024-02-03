import React, { useState, useEffect, useRef } from 'react';
import './css/autoscroller.css'; // Make sure to import your CSS file

const Autoscroller = ({ productImages }) => {
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, productImages]);

  return (
    <div className="autoscroller">
      <div
        className="autoscroller-slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {productImages.map((imageUrl, idx) => (
          <div
            className="autoscroller-slide"
            key={idx}
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Autoscroller;
