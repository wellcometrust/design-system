import React from 'react';

const IconActionTickCircle = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.579 6.277c.502.417.563 1.154.138 1.645l-4.915 5.68-.035.034c-.24.234-.558.364-.898.364a1.28 1.28 0 0 1-.898-.364l-2.623-2.571a1.152 1.152 0 0 1 0-1.65 1.207 1.207 0 0 1 1.685 0l1.769 1.733L14.9 8.412a1.209 1.209 0 0 1 1.679-.135z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconActionTickCircle;
