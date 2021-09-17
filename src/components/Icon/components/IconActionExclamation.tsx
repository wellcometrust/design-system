import React from 'react';

const IconActionExclamation = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-12c.788 0 1.427.639 1.427 1.427 0 .024 0 .047-.002.071l-.4 8.003A.525.525 0 0 1 12.5 15h-1a.526.526 0 0 1-.525-.5l-.4-8.002a1.426 1.426 0 0 1 1.354-1.496L12 5z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconActionExclamation;
