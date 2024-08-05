import * as React from 'react';
import { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM3.25 8A.75.75 0 0 1 4 7.25h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8ZM5.5 12a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilter;
