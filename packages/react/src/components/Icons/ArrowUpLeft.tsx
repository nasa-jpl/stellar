import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.707 12.707a1 1 0 0 1-1.414 0L6.5 7.914 4.707 9.707A1 1 0 0 1 3 9V4a1 1 0 0 1 1-1h5a1 1 0 0 1 .707 1.707L7.914 6.5l4.793 4.793a1 1 0 0 1 0 1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpLeft;
