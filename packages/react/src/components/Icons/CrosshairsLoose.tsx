import * as React from 'react';
import { SVGProps } from 'react';
const SvgCrosshairsLoose = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 11.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM8 .25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V1A.75.75 0 0 1 8 .25ZM11.25 8a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM.25 8A.75.75 0 0 1 1 7.25h3a.75.75 0 0 1 0 1.5H1A.75.75 0 0 1 .25 8Z"
      clipRule="evenodd"
    />
    <circle cx={8} cy={8} r={1} fill="currentColor" />
  </svg>
);
export default SvgCrosshairsLoose;
