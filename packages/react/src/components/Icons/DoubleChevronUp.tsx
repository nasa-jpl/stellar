import * as React from 'react';
import { SVGProps } from 'react';
const SvgDoubleChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.707 14.707a1 1 0 0 1-1.414 0L8 10.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.707 7.707a1 1 0 0 1-1.414 0L8 3.414 3.707 7.707a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDoubleChevronUp;
