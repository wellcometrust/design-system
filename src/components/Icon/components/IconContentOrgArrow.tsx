import React from 'react';

const IconContentOrgArrow = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M2 5a1 1 0 0 1 1 1v8h16.498l-2.62-2.409a.883.883 0 0 1-.05-1.25l.08-.077a1.003 1.003 0 0 1 1.356 0l4.173 3.836a1 1 0 0 1-.003 1.801l-4.17 3.835c-.351.323-.877.35-1.257.08l-.128-.107a.881.881 0 0 1-.05-1.25l.05-.05L19.498 16H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconContentOrgArrow;
