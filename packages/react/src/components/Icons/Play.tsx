import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <rect width={15} height={13} x={0.5} y={1.5} stroke="currentColor" rx={1.5} />
    <path
      fill="currentColor"
      d="M11.25 7.567a.5.5 0 0 1 0 .866l-4.5 2.598a.5.5 0 0 1-.75-.433V5.402a.5.5 0 0 1 .75-.433l4.5 2.598Z"
    />
  </svg>
);
export default SvgPlay;
