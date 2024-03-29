import React from 'react';

const IconContentFunding = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4,5c0,-1.105 0.895,-2 2,-2l16,0c1.105,0 2,0.895 2,2l0,10c0,1.105 -0.895,2 -2,2l-2,0l0,2c0,1.105 -0.895,2 -2,2l-16,0c-1.105,0 -2,-0.895 -2,-2l0,-10c0,-1.105 0.895,-2 2,-2l2,0l0,-2Zm17,10l-1,0l0,-6c0,-1.105 -0.895,-2 -2,-2l-12,0l0,-1c0,-0.552 0.448,-1 1,-1l14,0c0.552,0 1,0.448 1,1l0,8c0,0.552 -0.448,1 -1,1Zm-19,-5c0,-0.552 0.448,-1 1,-1l14,0c0.552,0 1,0.448 1,1l0,8c0,0.552 -0.448,1 -1,1l-14,0c-0.552,0 -1,-0.448 -1,-1l0,-8Zm12,4c0,2.209 -1.791,4 -4,4c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c2.209,0 4,1.791 4,4Zm-2,0c0,1.105 -0.895,2 -2,2c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2Z"
      fill="currentColor"
    />
  </svg>
);

export default IconContentFunding;
