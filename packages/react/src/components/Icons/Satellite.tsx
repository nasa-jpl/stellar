import * as React from 'react';
import { SVGProps } from 'react';
const SvgSatellite = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} fill="none" viewBox="0 0 17 17" {...props}>
    <rect
      width={6}
      height={4}
      x={3.071}
      y={-0.293}
      fill="currentColor"
      opacity={0.7}
      rx={1}
      transform="rotate(45 3.071 -.293)"
    />
    <rect
      width={6}
      height={4}
      x={12.971}
      y={9.607}
      fill="currentColor"
      opacity={0.7}
      rx={1}
      transform="rotate(45 12.97 9.607)"
    />
    <rect width={6} height={6} x={8.728} y={3.95} fill="currentColor" rx={1} transform="rotate(45 8.728 3.95)" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M.66 11.21a.5.5 0 0 1 .545.45c.08.833.504 1.756 1.27 2.522.766.766 1.689 1.19 2.522 1.27a.5.5 0 0 1-.095.996c-1.088-.104-2.221-.646-3.134-1.559-.913-.913-1.455-2.046-1.559-3.134a.5.5 0 0 1 .45-.546Z"
      clipRule="evenodd"
      opacity={0.7}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.881 10.503a.5.5 0 0 1 .445.55c-.07.655.124 1.275.563 1.715.44.44 1.06.633 1.715.563a.5.5 0 0 1 .106.995c-.916.097-1.848-.171-2.528-.851-.68-.68-.948-1.612-.85-2.528a.5.5 0 0 1 .55-.444Z"
      clipRule="evenodd"
      opacity={0.5}
    />
  </svg>
);
export default SvgSatellite;
