import React from 'react';

const IconSocialBellActive = ({
  viewBox = '0 0 24 24'
}: {
  viewBox?: string;
}) => (
  <svg viewBox={viewBox}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M12.322 0c.96 0 1.88.17 2.733.48a6.017 6.017 0 0 0-1.353 1.702A6.735 6.735 0 0 0 12.135 2h-.27A6.799 6.799 0 0 0 5.07 8.561l-.004.239v4.028c0 1.695-.417 3.362-1.21 4.855L3.677 18h16.644l-.176-.317a10.341 10.341 0 0 1-1.204-4.464l-.007-.391V11H19c.454 0 .896-.05 1.321-.146v2.26A6.78 6.78 0 0 0 22.402 18l.29.28A.999.999 0 0 1 22 20h-7.168A3.001 3.001 0 0 1 12 24a3.001 3.001 0 0 1-2.833-4H2a1 1 0 0 1-.693-1.72l.29-.28a6.775 6.775 0 0 0 2.081-4.886V8a8 8 0 0 1 8-8z"
        fill="currentColor"
      />
      <circle cx="19" cy="5" fill="#e10f2d" r="5" />
    </g>
  </svg>
);

export default IconSocialBellActive;
