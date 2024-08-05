import * as React from 'react';
import { SVGProps } from 'react';
const SvgSunrise = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd" opacity={0.7}>
      <path d="M2.381 6.381a.875.875 0 0 1 1.238 0l1 1A.875.875 0 1 1 3.38 8.62l-1-1a.875.875 0 0 1 0-1.238ZM.125 12c0-.483.392-.875.875-.875h1a.875.875 0 0 1 0 1.75H1A.875.875 0 0 1 .125 12ZM13.125 12c0-.483.392-.875.875-.875h1a.875.875 0 0 1 0 1.75h-1a.875.875 0 0 1-.875-.875ZM13.619 6.381a.875.875 0 0 1 0 1.238l-1 1A.875.875 0 1 1 11.38 7.38l1-1a.875.875 0 0 1 1.238 0ZM.125 15c0-.483.392-.875.875-.875h14a.875.875 0 0 1 0 1.75H1A.875.875 0 0 1 .125 15Z" />
    </g>
    <path
      fill="currentColor"
      d="M10.954 3.588a.722.722 0 0 0-.13-.726L8.424.195A.571.571 0 0 0 8 0c-.16 0-.312.07-.424.195l-2.4 2.667a.722.722 0 0 0-.13.726c.093.25.311.412.554.412h4.8a.603.603 0 0 0 .554-.412Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 7a1 1 0 0 0 1-1V4a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1ZM4.5 12a3.5 3.5 0 1 1 7 0 .5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSunrise;
