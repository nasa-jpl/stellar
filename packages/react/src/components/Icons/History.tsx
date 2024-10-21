import * as React from 'react';
import { SVGProps } from 'react';
const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <g stroke="currentColor" opacity={0.7}>
      <g strokeWidth={1.5} clipPath="url(#a)">
        <circle cx={10} cy={14} r={5.25} />
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.125 12.875 1.875.75V17" />
      </g>
      <path strokeWidth={2} d="M10 5h10M16 9h4M18 13h2" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M4 8h12v12H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHistory;
