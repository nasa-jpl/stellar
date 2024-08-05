import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.711 5.297a1 1 0 0 1-.008 1.414l-4.05 4a1 1 0 0 1-1.414-.008l-3.95-4A1 1 0 0 1 4.71 5.297L7.96 8.586l3.338-3.297a1 1 0 0 1 1.414.008Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDown;
