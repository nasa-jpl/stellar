import * as React from 'react';
import { SVGProps } from 'react';
const SvgTreeParentCollapsed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="m14 9-6 3.464V5.536L14 9Z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.5 7V2h2v5a1 1 0 0 0 1 1H6v2H4.5a3 3 0 0 1-3-3Z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgTreeParentCollapsed;
