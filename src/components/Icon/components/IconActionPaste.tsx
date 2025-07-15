import React from 'react';

function IconActionPaste({ viewBox = '0 0 24 24' }: { viewBox?: string }) {
  return (
    <svg viewBox={viewBox}>
      <path
        d="M5 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1h1a3 3 0 0 1 3 3v2h-2V4a1 1 0 0 0-1-1h-1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2v2H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1Zm15 7h-9a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm-10 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-9Zm2 3a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default IconActionPaste;
