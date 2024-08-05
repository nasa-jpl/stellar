import * as React from 'react';
import { SVGProps } from 'react';
const SvgExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.333 5A.333.333 0 0 0 3 5.333v7.334a.333.333 0 0 0 .333.333h7.334a.333.333 0 0 0 .333-.333v-3a1 1 0 1 1 2 0v3A2.333 2.333 0 0 1 10.667 15H3.333A2.333 2.333 0 0 1 1 12.667V5.333A2.333 2.333 0 0 1 3.333 3h3a1 1 0 1 1 0 2h-3ZM9 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V3h-3a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.707 1.293a1 1 0 0 1 0 1.414L7.374 10.04A1 1 0 1 1 5.96 8.626l7.333-7.333a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExternalLink;
