import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <rect width={4} height={2} x={4} y={7} fill="currentColor" rx={1} />
    <rect width={6} height={2} x={6} y={10} fill="currentColor" rx={1} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.75 4.625v9.75h10.5v-9.75H2.75ZM2 3c-.552 0-1 .416-1 .929V15.07c0 .513.448.929 1 .929h12c.552 0 1-.416 1-.929V3.93C15 3.416 14.552 3 14 3H2Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.268 1a2 2 0 0 1 3.464 0H12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2.268Z"
      clipRule="evenodd"
      opacity={0.7}
    />
  </svg>
);
export default SvgPlan;
