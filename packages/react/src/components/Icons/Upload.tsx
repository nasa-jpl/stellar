import * as React from 'react';
import { SVGProps } from 'react';
const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 12.667a.333.333 0 0 0 .333.333h9.334a.333.333 0 0 0 .333-.333V10a1 1 0 1 1 2 0v2.667A2.333 2.333 0 0 1 12.667 15H3.333A2.333 2.333 0 0 1 1 12.667V10a1 1 0 1 1 2 0v2.667Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.47 4.47A.75.75 0 0 0 5 5.75h2V10a1 1 0 1 0 2 0V5.75h2a.75.75 0 0 0 .53-1.28l-3-3a.75.75 0 0 0-1.06 0l-3 3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUpload;
