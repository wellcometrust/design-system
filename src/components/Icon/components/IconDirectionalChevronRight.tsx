import React from 'react';

const IconDirectionalChevronRight = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M15.694 11.256a1.057 1.057 0 0 1 0 1.488l-5.91 5.948c-.408.41-1.07.41-1.478 0a1.056 1.056 0 0 1 0-1.487L13.478 12 8.306 6.795a1.056 1.056 0 0 1 0-1.487c.408-.41 1.07-.41 1.478 0l5.91 5.948z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconDirectionalChevronRight;
