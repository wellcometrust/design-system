import React from 'react';

const IconContentCalendarAdd = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M22 0a2 2 0 0 1 2 2v18c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V2a2 2 0 0 1 2-2h20zm-1 4H3a1 1 0 0 0-.993.883L2 5v14a3 3 0 0 0 2.824 2.995L5 22h14a3 3 0 0 0 2.995-2.824L22 19V5a1 1 0 0 0-1-1zm-9 4a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V9a1 1 0 0 1 1-1z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconContentCalendarAdd;
