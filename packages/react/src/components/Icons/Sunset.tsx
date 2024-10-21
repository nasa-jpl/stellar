import * as React from 'react';
import { SVGProps } from 'react';
const SvgSunset = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd" opacity={0.7}>
      <path d="M2.381 6.381a.875.875 0 0 1 1.238 0l1 1A.875.875 0 1 1 3.38 8.62l-1-1a.875.875 0 0 1 0-1.238M.125 12c0-.483.392-.875.875-.875h1a.875.875 0 0 1 0 1.75H1A.875.875 0 0 1 .125 12M13.125 12c0-.483.392-.875.875-.875h1a.875.875 0 0 1 0 1.75h-1a.875.875 0 0 1-.875-.875M13.619 6.381a.875.875 0 0 1 0 1.238l-1 1A.875.875 0 1 1 11.38 7.38l1-1a.875.875 0 0 1 1.238 0M.125 15c0-.483.392-.875.875-.875h14a.875.875 0 0 1 0 1.75H1A.875.875 0 0 1 .125 15" />
    </g>
    <path
      fill="currentColor"
      d="M10.954 3.412a.72.72 0 0 1-.13.726l-2.4 2.667A.57.57 0 0 1 8 7a.57.57 0 0 1-.424-.195l-2.4-2.667a.72.72 0 0 1-.13-.726A.6.6 0 0 1 5.6 3h4.8c.243 0 .461.162.554.412"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1M4.5 12a3.5 3.5 0 1 1 7 0 .5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSunset;
