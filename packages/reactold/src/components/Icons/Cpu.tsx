import * as React from 'react';
import { SVGProps } from 'react';
const SvgCpu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M5 1a1 1 0 0 1 2 0v2H5zM9 1a1 1 0 0 1 2 0v2H9zM5 15a1 1 0 1 0 2 0v-2H5zM9 15a1 1 0 1 0 2 0v-2H9zM15 5a1 1 0 1 1 0 2h-2V5zM15 9a1 1 0 1 1 0 2h-2V9zM1 5a1 1 0 0 0 0 2h2V5zM1 9a1 1 0 0 0 0 2h2V9z"
    />
  </svg>
);
export default SvgCpu;
