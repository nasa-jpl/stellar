import * as React from 'react';
import { SVGProps } from 'react';
const SvgGridEmpty2X2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.253 8.875V14h1.75V8.875h5.125v-1.75H9.003V2h-1.75v5.125H2v1.75z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.878 2.75v10.5h10.5V2.75zM2.128 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGridEmpty2X2;
