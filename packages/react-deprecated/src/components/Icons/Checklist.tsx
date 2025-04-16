import * as React from 'react';
import { SVGProps } from 'react';
const SvgChecklist = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <rect width={15} height={13} x={15.5} y={14.5} stroke="currentColor" rx={1.5} transform="rotate(180 15.5 14.5)" />
    <circle cx={4.5} cy={10.5} r={1.5} fill="currentColor" />
    <path stroke="currentColor" strokeLinecap="round" d="M8.5 5.5h4M8.5 10.5h4" />
    <path stroke="currentColor" d="m3 5 1.5 1.5L7 4" />
  </svg>
);
export default SvgChecklist;
