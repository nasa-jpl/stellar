import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlanWithLeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M6.268 1a2 2 0 0 1 3.464 0H12a1 1 0 0 1 1 1v1H3V2a1 1 0 0 1 1-1h2.268Z"
      opacity={0.7}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.75 4.625v9.75h10.5v-9.75H2.75ZM2 3c-.552 0-1 .416-1 .929V15.07c0 .513.448.929 1 .929h12c.552 0 1-.416 1-.929V3.93C15 3.416 14.552 3 14 3H2Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.153 9.618c0 .38-.308.688-.687.688h-2.66v1.743a.687.687 0 0 1-1.174.486l-2.43-2.43a.687.687 0 0 1 0-.973l2.43-2.43a.688.688 0 0 1 1.174.486V8.93h2.66c.38 0 .687.308.687.687Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlanWithLeftArrow;
