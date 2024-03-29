import React from 'react';

const IconSmallActionMinus = ({
  viewBox = '0 0 16 16'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <rect
      x="2"
      y="7"
      width="12"
      height="2"
      rx="1"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconSmallActionMinus;
