import * as React from 'react';
import { SVGProps } from 'react';
const SvgLocate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 3.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5ZM2.25 8a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75ZM.25 8A.75.75 0 0 1 1 7.25h4a.75.75 0 0 1 0 1.5H1A.75.75 0 0 1 .25 8ZM8 5.75A.75.75 0 0 1 7.25 5V1a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75ZM8 15.75a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLocate;
