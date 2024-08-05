import * as React from 'react';
import { SVGProps } from 'react';
const SvgActivityDirective = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <g opacity={0.64}>
      <path fill="currentColor" d="m12 8-6 3.464V4.536L12 8Z" opacity={0.9} />
      <path stroke="currentColor" strokeWidth={2} d="M3 4v8" />
    </g>
  </svg>
);
export default SvgActivityDirective;
