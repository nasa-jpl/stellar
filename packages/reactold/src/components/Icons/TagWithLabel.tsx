import * as React from 'react';
import { SVGProps } from 'react';
const SvgTagWithLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.343 14.243 1.707 9.607a1 1 0 0 1 0-1.415L8.27 1.63a1 1 0 0 1 .707-.293h4.636a1 1 0 0 1 1 1v4.636a1 1 0 0 1-.293.707l-6.563 6.563a1 1 0 0 1-1.414 0M13 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M3.464 8.293a1 1 0 0 0 0 1.414l2.829 2.829a1 1 0 0 0 1.414 0l2.829-2.829a1 1 0 0 0 0-1.414L7.707 5.464a1 1 0 0 0-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTagWithLabel;
