import React from 'react';

const IconSmallActionCross = ({
  viewBox = '0 0 16 16'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M12.243 3.757a1 1 0 0 1 0 1.415L9.414 8l2.829 2.828a1 1 0 0 1-1.415 1.415L8 9.414l-2.828 2.829a1 1 0 1 1-1.415-1.415L6.586 8 3.757 5.172a1 1 0 0 1 1.415-1.415L8 6.586l2.828-2.829a1 1 0 0 1 1.415 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconSmallActionCross;
