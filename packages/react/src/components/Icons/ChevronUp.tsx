import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.289 10.703a1 1 0 0 1 .008-1.414l4.05-4a1 1 0 0 1 1.414.008l3.95 4a1 1 0 0 1-1.422 1.406L8.04 7.414l-3.338 3.297a1 1 0 0 1-1.414-.008Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronUp;
