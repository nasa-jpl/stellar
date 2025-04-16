import * as React from 'react';
import { SVGProps } from 'react';
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m1.707 9.607 4.636 4.636a1 1 0 0 0 1.414 0L14.32 7.68a1 1 0 0 0 .293-.707V2.337a1 1 0 0 0-1-1H8.977a1 1 0 0 0-.707.293L1.707 8.192a1 1 0 0 0 0 1.415M11.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTag;
