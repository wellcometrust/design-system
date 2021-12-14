import React from 'react';

const IconContentHome = ({ viewBox = '0 0 24 24' }: { viewBox?: string }) => (
  <svg viewBox={viewBox}>
    <path
      d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2Zm5-2v-5h4v5h-4Zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5v-8.59Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconContentHome;
