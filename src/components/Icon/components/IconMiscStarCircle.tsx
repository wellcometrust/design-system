import React from 'react';

const IconMiscStarCircle = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      clipRule="evenodd"
      d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-2,0c0,5.523 -4.477,10 -10,10c-5.523,0 -10,-4.477 -10,-10c0,-5.523 4.477,-10 10,-10c5.523,0 10,4.477 10,10Zm-8.428,-2.163l-1.572,-4.837l-1.572,4.837l-5.085,-0l4.114,2.989l-1.572,4.837l4.115,-2.989l4.114,2.989l-1.571,-4.837l4.114,-2.989l-5.085,-0Z"
      fill="currentColor"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    />
  </svg>
);

export default IconMiscStarCircle;
