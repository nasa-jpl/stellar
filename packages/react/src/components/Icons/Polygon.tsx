import * as React from 'react';
import { SVGProps } from 'react';
const SvgPolygon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <g clipPath="url(#a)">
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.423 2a.667.667 0 0 1 1.154 0l6.207 10.75a.667.667 0 0 1-.578 1H1.793a.667.667 0 0 1-.577-1L7.423 2Z"
      />
    </g>
  </svg>
);
export default SvgPolygon;
