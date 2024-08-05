import * as React from 'react';
import { SVGProps } from 'react';
const SvgFourArrowsDiagonal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.243 13.243h-2.546l2.546-2.546v2.546Zm0 0L2.757 2.757m0 10.486h2.546l-2.546-2.546v2.546Zm0 0L13.243 2.757m0 0h-2.546l2.546 2.546V2.757Zm-10.486 0v2.546l2.546-2.546H2.757Z"
    />
  </svg>
);
export default SvgFourArrowsDiagonal;
