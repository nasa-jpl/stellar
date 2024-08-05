import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.707 2.293a1 1 0 0 1 0 1.414L8.914 8.5l1.793 1.793A1 1 0 0 1 10 12H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1.707-.707L7.5 7.086l4.793-4.793a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownLeft;
