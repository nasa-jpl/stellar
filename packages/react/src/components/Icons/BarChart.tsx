import * as React from 'react';
import { SVGProps } from 'react';
const SvgBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="M14 7h-4a1 1 0 0 0-1 1v4H7V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v10h14V8a1 1 0 0 0-1-1Z" />
  </svg>
);
export default SvgBarChart;
