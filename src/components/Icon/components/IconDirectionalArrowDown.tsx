import React from 'react';

const IconDirectionalArrowDown = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <path
      d="M12 2c.51 0 .923.413.923.923v15.662l2.5-2.706a.89.89 0 0 1 1.307 0l.026.028a1 1 0 0 1 0 1.357l-3.945 4.272-.024.024a.923.923 0 0 1-1.571.005l.023.02a.472.472 0 0 1-.05-.05l-3.945-4.27a1.001 1.001 0 0 1 0-1.358l.026-.028a.89.89 0 0 1 1.307 0l2.499 2.706V2.923c0-.51.414-.923.924-.923z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconDirectionalArrowDown;
