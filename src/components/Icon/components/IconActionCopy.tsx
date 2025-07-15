import React from 'react';

function IconActionCopy({ viewBox = '0 0 24 24' }: { viewBox?: string }) {
  return (
    <svg viewBox={viewBox}>
      <path
        d="M4 1h9a3 3 0 0 1 3 3v2h-2V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2v2H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Zm16 7h-9a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm-10 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-9Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconActionCopy;
