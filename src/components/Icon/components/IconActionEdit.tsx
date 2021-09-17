import React from 'react';

const IconActionEdit = ({ viewBox = '0 0 24 24' }: { viewBox?: string }) => (
  <svg viewBox={viewBox}>
    <path
      d="M12 2v2H5a1 1 0 0 0-.993.883L4 5v14a1 1 0 0 0 .883.993L5 20h14a1 1 0 0 0 .993-.883L20 19v-7h2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm8.744.942c.405.56.162 1.622-.558 2.439l-8.075 8.129c-.153.153-.292.245-.48.287l-1.874.429c-.374.086-.567-.107-.481-.483l.429-1.876c.043-.187.134-.327.287-.48l8.109-8.019c.969-.873 2.142-1.082 2.643-.426z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default IconActionEdit;
