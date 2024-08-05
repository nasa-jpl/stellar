import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="M8 3h5v5l-2.5-2.5L8 3Z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.293 11.707a1 1 0 0 1 0-1.414L9.086 5.5 7.293 3.707A1 1 0 0 1 8 2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1.707.707L10.5 6.914l-4.793 4.793a1 1 0 0 1-1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpRight;
