import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 1.686a1 1 0 0 1 1 1v6.778h2.536a1 1 0 0 1 .707 1.708l-3.536 3.535a1 1 0 0 1-1.414 0l-3.536-3.535a1 1 0 0 1 .707-1.708H7V2.686a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDown;
