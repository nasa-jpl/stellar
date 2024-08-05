import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.297 3.289a1 1 0 0 1 1.414.008l4 4.05a1 1 0 0 1-.008 1.414l-4 3.95a1 1 0 0 1-1.406-1.422L8.586 8.04 5.289 4.703a1 1 0 0 1 .008-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronRight;
