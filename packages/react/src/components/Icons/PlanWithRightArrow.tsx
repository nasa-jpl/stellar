import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlanWithRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M9.732 1a2 2 0 0 0-3.464 0H4a1 1 0 0 0-1 1v1h10V2a1 1 0 0 0-1-1H9.732Z"
      opacity={0.7}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.25 4.625v9.75H2.75v-9.75h10.5ZM14 3c.552 0 1 .416 1 .929V15.07c0 .513-.448.929-1 .929H2c-.552 0-1-.416-1-.929V3.93C1 3.416 1.448 3 2 3h12Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.847 9.618c0 .38.308.688.687.688h2.66v1.743a.687.687 0 0 0 1.174.486l2.43-2.43a.687.687 0 0 0 0-.973l-2.43-2.43a.688.688 0 0 0-1.174.486V8.93h-2.66a.687.687 0 0 0-.687.687Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlanWithRightArrow;
