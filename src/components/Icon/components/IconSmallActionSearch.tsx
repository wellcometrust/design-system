import React from 'react';

const IconSmallActionSearch = ({
  viewBox = '0 0 16 16'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M6 0a6 6 0 0 1 4.89 9.477l4.646 4.644c.39.39.39 1.024 0 1.415-.391.39-1.024.39-1.415 0L9.477 10.89A6 6 0 1 1 6 0zm0 2C3.79 2 2 3.79 2 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconSmallActionSearch;
