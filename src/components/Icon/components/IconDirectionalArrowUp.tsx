import React from 'react';

const IconDirectionalArrowUp = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M12 22c.508 0 .92-.413.92-.923V5.415l2.489 2.706a.881.881 0 0 0 1.25.05l.077-.078a1.004 1.004 0 0 0 0-1.357l-3.928-4.272-.024-.024a.92.92 0 0 0-1.498-.099l-.07.098-3.952 4.297c-.323.351-.35.877-.08 1.257l.107.128a.881.881 0 0 0 1.25.05l.05-.05 2.489-2.706v15.662c0 .51.412.923.92.923z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconDirectionalArrowUp;
