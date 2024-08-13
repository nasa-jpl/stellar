import * as React from 'react';
import { SVGProps } from 'react';
const SvgTableWithHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.75 9V6.75h2.375V9zm0 1.75v2.5h2.375v-2.5zm4.125 2.5h6.375v-2.5H6.875zM13.25 9V6.75H6.875V9zM1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTableWithHeader;
