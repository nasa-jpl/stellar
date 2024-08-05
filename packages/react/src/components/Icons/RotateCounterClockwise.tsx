import * as React from 'react';
import { SVGProps } from 'react';
const SvgRotateCounterClockwise = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1.603 6.5 2.74-2.74A6 6 0 1 1 5.258 13c-1.083-.72-1.675-1.5-2.175-2.5"
      />
      <path
        fill="currentColor"
        d="M6.118 7.105a.75.75 0 0 1-.693.463H1.182a.75.75 0 0 1-.75-.75V2.575a.75.75 0 0 1 1.28-.53l4.243 4.243a.75.75 0 0 1 .163.817Z"
      />
    </g>
  </svg>
);
export default SvgRotateCounterClockwise;
