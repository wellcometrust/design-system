import React from 'react';

const IconDirectionalCircleArrowUp = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.707 7.293 4.243 4.243a1 1 0 0 1-1.414 1.414L12 11.414 8.464 14.95a1 1 0 0 1-1.414-1.414l4.243-4.243a1 1 0 0 1 1.414 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconDirectionalCircleArrowUp;
