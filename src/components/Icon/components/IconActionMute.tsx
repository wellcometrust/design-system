import React from 'react';

const IconActionMute = ({ viewBox = '0 0 24 24' }: { viewBox?: string }) => (
  <svg viewBox={viewBox}>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(-1 4)" fill="currentColor">
        <rect x="1" y="4" width="9" height="8" rx="1" />
        <path d="m2.067 8.8 9.333 7A1 1 0 0 0 13 15V1a1 1 0 0 0-1.6-.8l-9.333 7a1 1 0 0 0 0 1.6Z" />
      </g>
      <path
        d="M16 4a8 8 0 1 1 0 16l-.117-.007a1 1 0 0 1 0-1.986L16 18a6 6 0 1 0 0-12l-.117-.007a1 1 0 0 1 0-1.986L16 4Zm0 4a4 4 0 1 1 0 8l-.117-.007A1 1 0 0 1 16 14a2 2 0 1 0 0-4l-.117-.007A1 1 0 0 1 16 8Z"
        fill="currentColor"
      />
      <rect
        fill="currentColor"
        transform="rotate(33 11.867 12.191)"
        x="-1.633"
        y="11.191"
        width="27"
        height="2"
        rx="1"
      />
    </g>
  </svg>
);

export default IconActionMute;
