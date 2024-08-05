import * as React from 'react';
import { SVGProps } from 'react';
const SvgRemoveAll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M3.333 10h-.666a1.333 1.333 0 0 1-1.334-1.333v-6a1.333 1.333 0 0 1 1.334-1.334h6A1.333 1.333 0 0 1 10 2.667v.666m-1.417 5.25 3.5 3.5m-3.5 0 3.5-3.5M7.333 6h6c.737 0 1.334.597 1.334 1.333v6c0 .737-.597 1.334-1.334 1.334h-6A1.333 1.333 0 0 1 6 13.333v-6C6 6.597 6.597 6 7.333 6Z"
    />
  </svg>
);
export default SvgRemoveAll;
