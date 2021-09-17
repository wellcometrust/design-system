import React from 'react';

const IconActionInformation = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    />
  </svg>
);

export default IconActionInformation;
