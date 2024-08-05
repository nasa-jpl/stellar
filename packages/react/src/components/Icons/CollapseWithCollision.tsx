import * as React from 'react';
import { SVGProps } from 'react';
const SvgCollapseWithCollision = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <g fill="currentColor" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <path d="M.293.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414Z" />
      <path d="M.293.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414Z" />
      <path d="M1 6a1 1 0 0 1 1-1h3V2a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM15.707 15.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414Z" />
      <path d="M15 10a1 1 0 0 1-1 1h-3v3a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1ZM13.354 2.646a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0ZM14.5 6a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5ZM10 1.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5ZM2.646 13.354a.5.5 0 0 1 0-.708l1-1a.5.5 0 0 1 .708.708l-1 1a.5.5 0 0 1-.708 0ZM1.5 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5ZM6 14.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5Z" />
    </g>
  </svg>
);
export default SvgCollapseWithCollision;
