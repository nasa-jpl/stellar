import * as React from 'react';
import { SVGProps } from 'react';
const SvgRegionTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" fillRule="evenodd" d="M12 4H4v8h8zM3 3v10h10V3z" clipRule="evenodd" opacity={0.5} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.5 12.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M10.5 12.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M1.5 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M10.5 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRegionTarget;
