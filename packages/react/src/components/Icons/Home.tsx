import * as React from 'react';
import { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="m1.604 6.543 5.823-5.046a.875.875 0 0 1 1.146 0l5.823 5.046c.384.333.604.815.604 1.323v5.822c0 .724-.588 1.312-1.313 1.312h-2.479a.875.875 0 0 1-.875-.875v-2.917a.875.875 0 0 0-.875-.875H6.542a.875.875 0 0 0-.875.875v2.917a.875.875 0 0 1-.875.875h-2.48A1.312 1.312 0 0 1 1 13.687V7.867c0-.508.22-.99.604-1.323Z"
    />
  </svg>
);
export default SvgHome;
