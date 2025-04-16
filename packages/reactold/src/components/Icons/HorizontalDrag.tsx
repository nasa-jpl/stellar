import * as React from 'react';
import { SVGProps } from 'react';
const SvgHorizontalDrag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M7.303 16 6 7l8.25 4.286-3.75.214 3 3.375L12.079 16 9 12.25z" />
      <path
        fillRule="evenodd"
        d="m3.646.646.708.708L2.207 3.5h11.586l-2.147-2.146.708-.708L15.707 4l-3.353 3.354-.708-.708L13.793 4.5H2.207l2.147 2.146-.708.708L.293 4z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHorizontalDrag;
