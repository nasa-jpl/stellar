import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlanWithDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.75 4.625v9.75h10.5v-9.75H2.75ZM2 3c-.552 0-1 .416-1 .929V15.07c0 .513.448.929 1 .929h12c.552 0 1-.416 1-.929V3.93C15 3.416 14.552 3 14 3H2Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6.268 1a2 2 0 0 1 3.464 0H12a1 1 0 0 1 1 1v1H3V2a1 1 0 0 1 1-1h2.268Z"
      opacity={0.7}
    />
    <path
      fill="currentColor"
      d="M7.324 9H5.658a.657.657 0 0 0-.465 1.122l2.324 2.324a.657.657 0 0 0 .93 0l2.323-2.324A.657.657 0 0 0 10.306 9H7.324Z"
    />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9.5V7" />
  </svg>
);
export default SvgPlanWithDownArrow;
