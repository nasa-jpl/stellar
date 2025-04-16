import * as React from 'react';
import { SVGProps } from 'react';
const SvgTargetSingle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m6.088 9.634 1.67 5.568a.25.25 0 0 0 .479 0l1.679-5.595A5 5 0 0 1 7.968 10c-.665 0-1.3-.13-1.88-.366m-.406-1.35-.588-1.962A.25.25 0 0 1 5.334 6h5.328a.25.25 0 0 1 .239.322l-.572 1.908A4 4 0 0 1 7.968 9c-.85 0-1.638-.265-2.286-.717"
      clipRule="evenodd"
    />
    <circle cx={8} cy={5} r={4} fill="currentColor" />
  </svg>
);
export default SvgTargetSingle;
