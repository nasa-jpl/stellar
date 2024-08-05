import * as React from 'react';
import { SVGProps } from 'react';
const SvgDiagonalCollapseWithCenterLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="M15 5h-4V1l2 2 2 2Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 1-4 4m0 0h4l-4-4v4Z"
    />
    <path fill="currentColor" d="M1 11h4v4l-2-2-2-2Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 15 4-4m0 0H1l4 4v-4Z"
    />
    <path stroke="currentColor" strokeWidth={2} d="M13.293 13.707 1.979 2.393" />
  </svg>
);
export default SvgDiagonalCollapseWithCenterLine;
