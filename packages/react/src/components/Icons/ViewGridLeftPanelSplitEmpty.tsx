import * as React from 'react';
import { SVGProps } from 'react';
const SvgViewGridLeftPanelSplitEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <g clipPath="url(#a)" opacity={0.5}>
      <path d="M0 20h20V0H0z" />
      <rect width={19} height={19} x={0.5} y={-0.5} stroke="currentColor" rx={0.75} transform="matrix(1 0 0 -1 0 19)" />
      <rect width={7} height={8} x={0.5} y={-0.5} stroke="currentColor" rx={0.75} transform="matrix(1 0 0 -1 0 8)" />
      <rect width={7} height={8} x={0.5} y={-0.5} stroke="currentColor" rx={0.75} transform="matrix(1 0 0 -1 0 19)" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 20h20V0H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewGridLeftPanelSplitEmpty;
