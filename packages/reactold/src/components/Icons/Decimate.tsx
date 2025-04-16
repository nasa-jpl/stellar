import * as React from 'react';
import { SVGProps } from 'react';
const SvgDecimate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path stroke="currentColor" d="M1.5 0v16M16 14.5H0" />
    <path stroke="currentColor" strokeWidth={1.5} d="M4.5 14V7.5h9V0" opacity={0.3} />
    <path stroke="currentColor" strokeWidth={1.5} d="M1 12c7.759 0 6.724-9 15-9" />
  </svg>
);
export default SvgDecimate;
