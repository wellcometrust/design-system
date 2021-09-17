import React from 'react';

const IconContentLink = ({ viewBox = '0 0 24 24' }: { viewBox?: string }) => (
  <svg viewBox={viewBox}>
    <path
      d="m5.165 9.722 1.52 1.519-2.279 2.278a4.295 4.295 0 0 0 5.92 6.223l.155-.148 2.278-2.278 1.52 1.519L12 21.113A6.445 6.445 0 0 1 2.887 12l2.278-2.278zM12 2.887A6.445 6.445 0 0 1 21.113 12l-2.278 2.278-1.52-1.519 2.279-2.278c1.678-1.677 1.678-4.397 0-6.075s-4.398-1.678-6.075 0L11.24 6.684 9.72 5.165 12 2.887zm1.519 6.075a1.075 1.075 0 0 1 1.519 1.52l-4.557 4.556a1.075 1.075 0 0 1-1.519-1.52l4.557-4.556z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconContentLink;
