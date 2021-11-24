import React from 'react';

const IconContentCalendarDone = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M22 0a2 2 0 0 1 2 2v18c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V2a2 2 0 0 1 2-2h20zm-1 4H3a1 1 0 0 0-.993.883L2 5v14a3 3 0 0 0 2.824 2.995L5 22h14a3 3 0 0 0 2.995-2.824L22 19V5a1 1 0 0 0-1-1zm-4.421 5.277c.502.417.563 1.154.138 1.645l-4.915 5.68-.035.034c-.24.234-.558.364-.898.364a1.28 1.28 0 0 1-.898-.364l-2.623-2.571a1.152 1.152 0 0 1 0-1.65 1.207 1.207 0 0 1 1.685 0l1.769 1.733L14.9 9.412a1.209 1.209 0 0 1 1.679-.135z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconContentCalendarDone;
