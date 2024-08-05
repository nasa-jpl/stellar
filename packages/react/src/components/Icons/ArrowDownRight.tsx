import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M3.293 3.293a1 1 0 0 1 1.414 0L9.5 8.086l1.793-1.793A1 1 0 0 1 13 7v5a1 1 0 0 1-1 1H7a1 1 0 0 1-.707-1.707L8.086 9.5 3.293 4.707a1 1 0 0 1 0-1.414Z"
    />
  </svg>
);
export default SvgArrowDownRight;
