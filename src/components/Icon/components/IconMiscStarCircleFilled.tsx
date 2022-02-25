import React from 'react';

const IconMiscStarCircleFilled = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      clipRule="evenodd"
      d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm0,-19l1.572,4.837l5.085,-0l-4.114,2.989l1.572,4.837l-4.115,-2.989l-4.114,2.989l1.571,-4.837l-4.114,-2.989l5.085,-0l1.572,-4.837Z"
      fill="currentColor"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    />
  </svg>
);

export default IconMiscStarCircleFilled;
