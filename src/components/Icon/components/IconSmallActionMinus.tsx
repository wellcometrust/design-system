import React from 'react';

function IconSmallActionMinus({ viewBox = '0 0 16 16' }: { viewBox?: string }) {
  return (
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
}

export default IconSmallActionMinus;
