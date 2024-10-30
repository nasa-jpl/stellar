import * as React from 'react';
import { SVGProps } from 'react';
const SvgViewGridLeftPanelEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <g clipPath="url(#a)" opacity={0.5}>
      <path d="M20 0H0v20h20z" />
      <rect width={19} height={19} x={-0.5} y={0.5} stroke="currentColor" rx={0.75} transform="matrix(-1 0 0 1 19 0)" />
      <rect width={7} height={19} x={-0.5} y={0.5} stroke="currentColor" rx={0.75} transform="matrix(-1 0 0 1 7 0)" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M20 0H0v20h20z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewGridLeftPanelEmpty;
