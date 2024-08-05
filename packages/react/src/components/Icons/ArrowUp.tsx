import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="M4.464 5.536 8 2l3.536 3.536H4.464Z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 14.314a1 1 0 0 1-1-1V6.536H4.464a1 1 0 0 1-.707-1.708l3.536-3.535a1 1 0 0 1 1.414 0l3.536 3.535a1 1 0 0 1-.707 1.708H9v6.778a1 1 0 0 1-1 1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUp;
