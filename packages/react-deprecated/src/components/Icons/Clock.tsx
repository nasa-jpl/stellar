import * as React from 'react';
import { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <circle cx={8} cy={8} r={7} stroke="currentColor" strokeWidth={2} />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5.5 6.5 2.5 1V12" />
  </svg>
);
export default SvgClock;
