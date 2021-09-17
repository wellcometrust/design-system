import React from 'react';

const IconDirectionalCircleArrowDown = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.05 9.293a1 1 0 0 1 1.414 0L12 12.828l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.243a1 1 0 0 1-1.414 0L7.05 10.707a1 1 0 0 1 0-1.414z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconDirectionalCircleArrowDown;
