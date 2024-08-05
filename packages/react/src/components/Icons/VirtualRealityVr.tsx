import * as React from 'react';
import { SVGProps } from 'react';
const SvgVirtualRealityVr = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={16} fill="none" viewBox="0 0 18 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 4h8a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1.55a1 1 0 0 1-.748-.336l-.59-.664H13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2.889l-.59.664A1 1 0 0 1 6.55 13H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
      clipRule="evenodd"
    />
    <rect width={12} height={7} x={3} y={5} fill="currentColor" opacity={0.3} rx={2} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 10v0a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1v0M16 10v0a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1v0"
    />
  </svg>
);
export default SvgVirtualRealityVr;
