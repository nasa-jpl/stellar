import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.657 8a1 1 0 0 1-1 1H6.879v2.536a1 1 0 0 1-1.707.707L1.636 8.707a1 1 0 0 1 0-1.414l3.536-3.536a1 1 0 0 1 1.707.708V7h6.778a1 1 0 0 1 1 1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeft;
