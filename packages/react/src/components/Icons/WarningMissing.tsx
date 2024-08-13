import * as React from 'react';
import { SVGProps } from 'react';
const SvgWarningMissing = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M15 12 9.5 2.9c-.6-1.2-2.5-1.2-3.1 0L1 12c-.7 1.2.2 2.6 1.5 2.6h10.9c1.4 0 2.3-1.4 1.6-2.6m-4.9-1.5H5.9V8.8H10z"
    />
  </svg>
);
export default SvgWarningMissing;
