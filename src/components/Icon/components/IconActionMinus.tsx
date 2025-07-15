import React from 'react';

function IconActionMinus({ viewBox = '0 0 24 24' }: { viewBox?: string }) {
  return (
    <svg viewBox={viewBox}>
      <rect
        width="14"
        height="2"
        x="5"
        y="11"
        rx="1"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default IconActionMinus;
