import React from 'react';

const IconActionInformation = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id="a"
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      />
    </defs>
    <use fill="currentColor" xlinkHref="#a" fillRule="evenodd" />
  </svg>
);

export default IconActionInformation;
