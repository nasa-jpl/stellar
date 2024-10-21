import * as React from 'react';
import { SVGProps } from 'react';
const SvgDoubleChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 3 5 5-5 5M2 3l5 5-5 5"
    />
  </svg>
);
export default SvgDoubleChevronRight;
