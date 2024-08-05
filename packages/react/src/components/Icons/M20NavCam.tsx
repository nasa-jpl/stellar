import * as React from 'react';
import { SVGProps } from 'react';
const SvgM20NavCam = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <mask id="a" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5Zm3 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5Zm3 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M1 5H0h1Zm1 0a3 3 0 0 1 3-3V0a5 5 0 0 0-5 5h2Zm0 6V5H0v6h2Zm3 3a3 3 0 0 1-3-3H0a5 5 0 0 0 5 5v-2Zm6 0H5v2h6v-2Zm3-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Zm0-6v6h2V5h-2Zm-3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM5 2h6V0H5v2Zm6 6a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM8 5a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM5 8a3 3 0 0 1 3-3V3a5 5 0 0 0-5 5h2Zm3 3a3 3 0 0 1-3-3H3a5 5 0 0 0 5 5v-2Z"
      mask="url(#a)"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.433 6.433a2 2 0 0 0-2 2 .667.667 0 0 1-1.333 0A3.333 3.333 0 0 1 8.433 5.1a.667.667 0 0 1 0 1.333Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgM20NavCam;
