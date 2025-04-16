import * as React from 'react';
import { SVGProps } from 'react';
const SvgThreeDot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <circle cx={8} cy={2} r={2} fill="currentColor" />
    <circle cx={8} cy={8} r={2} fill="currentColor" />
    <circle cx={8} cy={14} r={2} fill="currentColor" />
  </svg>
);
export default SvgThreeDot;
