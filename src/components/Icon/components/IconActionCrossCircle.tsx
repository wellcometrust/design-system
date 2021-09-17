import React from 'react';

const IconActionCrossCircle = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.172 7.757 12 10.586l2.828-2.829a1.002 1.002 0 0 1 1.415 0c.39.39.39 1.024 0 1.415L13.414 12l2.829 2.828c.39.391.39 1.024 0 1.415-.39.39-1.024.39-1.415 0L12 13.414l-2.828 2.829c-.391.39-1.024.39-1.415 0a1.002 1.002 0 0 1 0-1.415L10.586 12 7.757 9.172a1.002 1.002 0 0 1 0-1.415c.39-.39 1.024-.39 1.415 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconActionCrossCircle;
