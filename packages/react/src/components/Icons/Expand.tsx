import * as React from 'react';
import { SVGProps } from 'react';
const SvgExpand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="M11 1h4v4l-2-2-2-2Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10 6 5-5m0 0h-4l4 4V1Z"
    />
    <path fill="currentColor" d="M5 15H1v-4l2 2 2 2Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 10-5 5m0 0h4l-4-4v4Z"
    />
  </svg>
);
export default SvgExpand;
