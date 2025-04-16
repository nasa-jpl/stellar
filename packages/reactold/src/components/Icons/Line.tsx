import * as React from 'react';
import { SVGProps } from 'react';
const SvgLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path stroke="currentColor" strokeWidth={1.5} d="M1 14.5 14.5 1" />
  </svg>
);
export default SvgLine;
