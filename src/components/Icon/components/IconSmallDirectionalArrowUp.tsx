import React from 'react';

const IconSmallDirectionalArrowUp = ({
  viewBox = '0 0 16 16'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M8 15c.508 0 .92-.413.92-.923V4.415l2.489 2.706a.881.881 0 0 0 1.25.05l.077-.078a1.004 1.004 0 0 0 0-1.357L8.808 1.464l-.024-.024a.92.92 0 0 0-1.498-.099l-.07.098-3.952 4.297c-.323.351-.35.877-.08 1.257l.107.128a.881.881 0 0 0 1.25.05l.05-.05L7.08 4.415v9.662c0 .51.412.923.92.923z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconSmallDirectionalArrowUp;
