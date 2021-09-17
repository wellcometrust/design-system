import React from 'react';

const IconDirectionalChevronDown = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M11.256 15.694a1.057 1.057 0 0 0 1.488 0l5.948-5.91c.41-.408.41-1.07 0-1.478a1.056 1.056 0 0 0-1.487 0L12 13.478 6.795 8.306a1.056 1.056 0 0 0-1.487 0c-.41.408-.41 1.07 0 1.478l5.948 5.91z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconDirectionalChevronDown;
