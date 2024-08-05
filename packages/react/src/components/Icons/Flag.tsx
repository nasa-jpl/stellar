import * as React from 'react';
import { SVGProps } from 'react';
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="M3 10.156c4-2.925 7 2.924 11 0V2.844c-4 2.925-7-2.924-11 0" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10.156c4-2.925 7 2.924 11 0V2.844c-4 2.925-7-2.924-11 0v7.312Zm0 0V15"
    />
  </svg>
);
export default SvgFlag;
