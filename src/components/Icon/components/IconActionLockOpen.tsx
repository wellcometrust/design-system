import React from 'react';

const IconActionLockOpen = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M22 0a2 2 0 0 1 2 2v6h-2V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-.993.883L16 3v5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h8V2a2 2 0 0 1 2-2h6zm-5 10H7a1 1 0 0 0-.993.883L6 11v10a1 1 0 0 0 .883.993L7 22h10a1 1 0 0 0 .993-.883L18 21V11a1 1 0 0 0-1-1zm-5 3a2 2 0 0 1 1.001 3.732L13 19h-2v-2.268A2 2 0 0 1 12 13z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconActionLockOpen;
