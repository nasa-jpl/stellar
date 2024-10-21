import * as React from 'react';
import { SVGProps } from 'react';
const SvgRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <rect width={14} height={14} x={1} y={1} stroke="currentColor" strokeWidth={1.5} rx={0.667} />
  </svg>
);
export default SvgRectangle;
