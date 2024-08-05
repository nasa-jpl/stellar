import * as React from 'react';
import { SVGProps } from 'react';
const SvgMarkerRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none" viewBox="0 0 15 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.5 16S13 8.279 13 5.333C13 2.388 10.538 0 7.5 0S2 2.388 2 5.333C2 8.28 7.5 16 7.5 16Zm0-7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
    <circle cx={7.5} cy={5} r={4} fill="#fff" />
    <path stroke="#293137" strokeWidth={1.5} d="M5 5h5" />
  </svg>
);
export default SvgMarkerRemove;
