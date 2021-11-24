import React from 'react';

const IconActionOpenExternal = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M12.667 4c.4 0 .666.267.666.667s-.266.666-.666.666H7.333c-1.133 0-2 .867-2 2v9.334c0 1.133.867 2 2 2h9.334c1.133 0 2-.867 2-2v-5.334c0-.4.266-.666.666-.666s.667.266.667.666v5.334A3.301 3.301 0 0 1 16.667 20H7.333A3.301 3.301 0 0 1 4 16.667V7.333A3.301 3.301 0 0 1 7.333 4zM19 4a1 1 0 0 1 .27.037c.175.008.347.08.48.213a.72.72 0 0 1 .213.48A1 1 0 0 1 20 5v3a1 1 0 0 1-2 0v-.972l-6.478 6.478a.727.727 0 1 1-1.028-1.028L16.97 6H16a1 1 0 0 1 0-2h3z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconActionOpenExternal;
