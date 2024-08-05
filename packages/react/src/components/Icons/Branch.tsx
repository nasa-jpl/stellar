import * as React from 'react';
import { SVGProps } from 'react';
const SvgBranch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 4h3.72a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2H14"
    />
    <path
      fill="currentColor"
      d="M15.367 10.583a.5.5 0 0 1 0 .834l-3.842 2.536a.5.5 0 0 1-.775-.418v-5.07a.5.5 0 0 1 .775-.417l3.842 2.535Z"
    />
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 4h5" opacity={0.5} />
  </svg>
);
export default SvgBranch;
