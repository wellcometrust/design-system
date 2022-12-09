import React from 'react';

const IconSmallContentImageGallery = ({
  viewBox = '0 0 16 16'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M14 10a2 2 0 0 1-1.85 1.995L12 12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2-2h1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-1.85 1.995L14 10Zm-4-3H2a1 1 0 0 0-1 1v4c0 .308.14.584.359.768l1.832-1.635a1 1 0 0 1 1.377.042l.308.31L7.95 8.747a1 1 0 0 1 1.583.35l1.406 3.247A.998.998 0 0 0 11 12V8a1 1 0 0 0-1-1Zm2-2H5a1 1 0 0 0-1 1h6a2 2 0 0 1 2 2v3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM3 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm11 1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1h5a2 2 0 0 1 2 2v3Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconSmallContentImageGallery;
