import * as React from 'react';
import { SVGProps } from 'react';
const SvgRotateClockwise = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m14.397 6.5-2.74-2.74a6 6 0 1 0-.915 9.24c1.083-.72 1.674-1.5 2.174-2.5"
      />
      <path
        fill="currentColor"
        d="M9.882 7.105a.75.75 0 0 0 .693.463h4.243a.75.75 0 0 0 .75-.75V2.575a.75.75 0 0 0-1.28-.53l-4.243 4.243a.75.75 0 0 0-.163.817Z"
      />
    </g>
  </svg>
);
export default SvgRotateClockwise;
