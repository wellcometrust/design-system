import React from 'react';

const IconSmallActionPlus = ({
  viewBox = '0 0 16 16'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M8 2a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2H9v4a1 1 0 0 1-2 0V9H3a1 1 0 0 1 0-2h4V3a1 1 0 0 1 1-1z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconSmallActionPlus;
