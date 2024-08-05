import * as React from 'react';
import { SVGProps } from 'react';
const SvgM20SuperCam = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="M2 13h6v3H2v-3Z" />
    <circle cx={12.214} cy={8.214} r={1.5} fill="currentColor" opacity={0.5} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 1H1v10h13a1 1 0 0 0 1-1V3a2 2 0 0 0-2-2Zm-3 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.333 4.333a2 2 0 0 0-2 2 .667.667 0 1 1-1.333 0A3.333 3.333 0 0 1 10.333 3a.667.667 0 1 1 0 1.333Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgM20SuperCam;
