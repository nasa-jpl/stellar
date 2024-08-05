import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.676 4.263a1 1 0 0 1 .061 1.413l-5.5 6a1 1 0 0 1-1.474 0l-2.5-2.728a1 1 0 0 1 1.474-1.351L6.5 9.52l4.763-5.196a1 1 0 0 1 1.413-.061Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheck;
