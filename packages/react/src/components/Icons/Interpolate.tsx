import * as React from 'react';
import { SVGProps } from 'react';
const SvgInterpolate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.154 14.367c-1.374.047-2.724-.465-4.096-1.837l1.061-1.06c1.128 1.128 2.091 1.428 2.983 1.398.959-.033 1.935-.446 3.111-.987l.24-.11c2.24-1.035 5.003-2.31 8.491-.431l-.71 1.32c-2.823-1.52-4.956-.538-7.24.513l-.155.071c-1.135.522-2.379 1.078-3.685 1.123"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M8 10 3.67 1.75h8.66z" />
  </svg>
);
export default SvgInterpolate;
