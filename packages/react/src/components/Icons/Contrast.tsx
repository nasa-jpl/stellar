import * as React from 'react';
import { SVGProps } from 'react';
const SvgContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <circle cx={8} cy={8} r={6.25} stroke="currentColor" strokeWidth={1.5} />
    <path fill="currentColor" d="M8 15A7 7 0 1 0 8 1v14Z" />
  </svg>
);
export default SvgContrast;
