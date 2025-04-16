import * as React from 'react';
import { SVGProps } from 'react';
const SvgViewGridFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <g fill="currentColor" stroke="currentColor" strokeWidth={1.25} clipPath="url(#a)">
      <rect width={7.5} height={18.75} x={-0.625} y={0.625} rx={0.625} transform="matrix(-1 0 0 1 18.75 0)" />
      <rect width={7.5} height={7.5} x={-0.625} y={0.625} rx={0.625} transform="matrix(-1 0 0 1 7.5 0)" />
      <rect width={7.5} height={7.5} x={-0.625} y={0.625} rx={0.625} transform="matrix(-1 0 0 1 7.5 11.25)" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M20 0H0v20h20z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewGridFilled;
