import * as React from 'react';
import { SVGProps } from 'react';
const SvgActivityAnchor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="#fff"
      stroke="#293137"
      d="M9 8.5h6a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5Z"
    />
    <path
      fill="#545F64"
      fillRule="evenodd"
      d="M6 10.75h2v-1.5H6c-.69 0-1.25-.56-1.25-1.25V5.25h-1.5V8A2.75 2.75 0 0 0 6 10.75Z"
      clipRule="evenodd"
    />
    <path fill="#545F64" d="m4 0 3.464 5.25H.536L4 0Z" />
  </svg>
);
export default SvgActivityAnchor;
