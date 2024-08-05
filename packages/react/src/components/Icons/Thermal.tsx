import * as React from 'react';
import { SVGProps } from 'react';
const SvgThermal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <mask id="a" fill="#fff">
      <path fillRule="evenodd" d="M8 0a3 3 0 0 0-3 3v4a5 5 0 1 0 6 0V3a3 3 0 0 0-3-3Z" clipRule="evenodd" />
    </mask>
    <path
      fill="currentColor"
      d="m5 7 .6.8.4-.3V7H5Zm6 0h-1v.5l.4.3.6-.8ZM6 3a2 2 0 0 1 2-2v-2a4 4 0 0 0-4 4h2Zm0 4V3H4v4h2Zm-2 4c0-1.308.627-2.47 1.6-3.2L4.4 6.2A5.992 5.992 0 0 0 2 11h2Zm4 4a4 4 0 0 1-4-4H2a6 6 0 0 0 6 6v-2Zm4-4a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6h-2Zm-1.6-3.2A3.992 3.992 0 0 1 12 11h2a5.992 5.992 0 0 0-2.4-4.8l-1.2 1.6ZM10 3v4h2V3h-2ZM8 1a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2Z"
      mask="url(#a)"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.5 4a.5.5 0 0 0-.5.5v3.67a3.001 3.001 0 1 0 2 0V4.5a.5.5 0 0 0-.5-.5h-1Z"
      clipRule="evenodd"
      opacity={0.8}
    />
  </svg>
);
export default SvgThermal;
