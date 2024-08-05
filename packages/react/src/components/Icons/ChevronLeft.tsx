import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.703 12.711a1 1 0 0 1-1.414-.008l-4-4.05a1 1 0 0 1 .008-1.414l4-3.95a1 1 0 0 1 1.406 1.422L7.414 7.96l3.297 3.338a1 1 0 0 1-.008 1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronLeft;
