import * as React from 'react';
import { SVGProps } from 'react';
const SvgCrosshairsFine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.5 9v7h-1V9zM8.5 0v7h-1V0zM9 7.5h7v1H9zM0 7.5h7v1H0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCrosshairsFine;
