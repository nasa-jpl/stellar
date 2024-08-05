import * as React from 'react';
import { SVGProps } from 'react';
const SvgChecklistOnPage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M1 4h15V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2h1ZM1 14V4H0v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4h-1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"
    />
    <path stroke="currentColor" strokeLinecap="round" d="M8.5 7.5h4" />
    <path stroke="currentColor" d="m3 7 1.5 1.5L7 6" />
    <circle cx={4.5} cy={12.5} r={1.5} fill="currentColor" />
    <path stroke="currentColor" strokeLinecap="round" d="M8.5 12.5h4" />
  </svg>
);
export default SvgChecklistOnPage;
