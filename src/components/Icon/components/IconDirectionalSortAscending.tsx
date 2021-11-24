import React from 'react';

const IconDirectionalSortAscending = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M17 15a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10zm-2-4a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h6zm-2-4a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconDirectionalSortAscending;
