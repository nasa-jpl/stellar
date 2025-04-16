import * as React from 'react';
import { SVGProps } from 'react';
const SvgLineChartTrendingUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1v13h14" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 10 5.5-5.5L10 8l5-7"
    />
  </svg>
);
export default SvgLineChartTrendingUp;
