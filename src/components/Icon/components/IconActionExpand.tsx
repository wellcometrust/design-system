import React from 'react';

const IconActionExpand = ({ viewBox = '0 0 28 28' }: { viewBox?: string }) => (
  <svg viewBox={viewBox}>
    <g fill="none" fillRule="evenodd">
      <circle cx="14" cy="14" r="14" fill="currentColor" opacity=".5" />
      <path
        d="m6.858 16.286.572 4.285 4.291.572-.016.857H6v-5.714h.858Zm14.285-4.572L20.57 7.43l-4.291-.572L16.274 6H22v5.688l-.857.026Z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default IconActionExpand;
