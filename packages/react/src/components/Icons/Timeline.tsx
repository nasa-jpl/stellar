import * as React from 'react';
import { SVGProps } from 'react';
const SvgTimeline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <rect width={4} height={2} x={4} y={4} fill="currentColor" rx={1} />
    <rect width={4} height={2} x={6} y={7} fill="currentColor" rx={1} />
    <rect width={4} height={2} x={8} y={10} fill="currentColor" rx={1} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.75 2.75v10.5h10.5V2.75H2.75ZM2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTimeline;
