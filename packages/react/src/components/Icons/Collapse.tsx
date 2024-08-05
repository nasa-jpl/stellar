import * as React from 'react';
import { SVGProps } from 'react';
const SvgCollapse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="M14 6h-4V2l2 2 2 2Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 1-5 5m0 0h4l-4-4v4Z"
    />
    <path fill="currentColor" d="M2 10h4v4l-2-2-2-2Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 15 5-5m0 0H2l4 4v-4Z"
    />
  </svg>
);
export default SvgCollapse;
