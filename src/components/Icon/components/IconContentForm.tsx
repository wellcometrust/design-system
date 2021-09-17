import React from 'react';

const IconContentForm = ({ viewBox = '0 0 24 24' }: { viewBox?: string }) => (
  <svg viewBox={viewBox}>
    <path
      d="M12 0c5.523 0 10 4.477 10 10v10c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h6zm0 2H6a2.001 2.001 0 0 0-1.995 1.85L4 4v16c0 1.054.816 1.918 1.85 1.995L6 22h12a2.001 2.001 0 0 0 1.995-1.85L20 20V10a8 8 0 0 0-8-8zm0 15a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h4zm4-4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h8zm0-4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h8z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconContentForm;
