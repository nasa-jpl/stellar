import * as React from 'react';
import { SVGProps } from 'react';
const SvgSort = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 10.5v-9m0 0-3 3m3-3 3 3M11 5.5v9m0 0 3-3m-3 3-3-3"
    />
  </svg>
);
export default SvgSort;
