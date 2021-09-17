import React from 'react';

const IconDirectionalArrowRight = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M2 12c0-.508.413-.92.923-.92h15.662l-2.706-2.489a.881.881 0 0 1-.05-1.25l.078-.077a1.004 1.004 0 0 1 1.357 0l4.272 3.928.024.024a.92.92 0 0 1 .099 1.498l-.098.07-4.297 3.952c-.351.323-.877.35-1.257.08l-.128-.107a.881.881 0 0 1-.05-1.25l.05-.05 2.706-2.489H2.923A.921.921 0 0 1 2 12z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconDirectionalArrowRight;
