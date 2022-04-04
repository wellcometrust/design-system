import React from 'react';

const IconActionPlayCircle = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9 7.618c.155 0 .308.036.447.106l6.764 3.382a1 1 0 0 1 0 1.788l-6.764 3.382A1 1 0 0 1 8 15.382V8.618a1 1 0 0 1 1-1z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconActionPlayCircle;
