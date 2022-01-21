import React from 'react';

const IconActionEmptyCircleSplit = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M12,0c6.623,0 12,5.377 12,12c0,6.597 -5.335,11.958 -11.922,12l-0.078,-0l0,-2c5.519,-0 10,-4.481 10,-10c0,-5.519 -4.481,-10 -10,-10l0,-2Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="M12,0c-6.623,0 -12,5.377 -12,12c0,6.597 5.335,11.958 11.922,12l0.078,-0l0,-2c-5.519,-0 -10,-4.481 -10,-10c0,-5.519 4.481,-10 10,-10l0,-2Z"
      fill="currentColor"
      fillRule="evenodd"
      fillOpacity="0.5"
    />
  </svg>
);

export default IconActionEmptyCircleSplit;
