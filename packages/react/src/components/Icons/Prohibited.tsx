import * as React from 'react';
import { SVGProps } from 'react';
const SvgProhibited = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.757 12.172a5 5 0 0 1-6.929-6.929zm1.415-1.415-6.93-6.929a5 5 0 0 1 6.929 6.929m1.434 1.435a7 7 0 1 0-1.414 1.414h.002c.535-.402 1.01-.877 1.411-1.412z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProhibited;
