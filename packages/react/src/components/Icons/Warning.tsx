import * as React from 'react';
import { SVGProps } from 'react';
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m6.817 2.669-5.88 9.818a1.39 1.39 0 0 0 1.186 2.083h11.763a1.39 1.39 0 0 0 1.188-2.083L9.192 2.669a1.39 1.39 0 0 0-2.375 0M8 4.773a1 1 0 0 1 1 1v2.894a1 1 0 1 1-2 0V5.773a1 1 0 0 1 1-1m0 5.977a1.25 1.25 0 1 0 0 2.5h.007a1.25 1.25 0 1 0 0-2.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWarning;
