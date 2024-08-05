import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.5 8a1 1 0 0 0 1 1h6.778v2.536a1 1 0 0 0 1.707.707l3.536-3.536a1 1 0 0 0 0-1.414l-3.536-3.536a1 1 0 0 0-1.707.707V7H2.5a1 1 0 0 0-1 1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRight;
