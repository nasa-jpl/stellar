import * as React from 'react';
import { SVGProps } from 'react';
const SvgMove = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.8 6.2 2 8l1.8 1.8M6.2 3.8 8 2l1.8 1.8M9.8 12.2 8 14l-1.8-1.8M12.2 6.2 14 8l-1.8 1.8M2 8h12M8 2v12"
    />
  </svg>
);
export default SvgMove;
