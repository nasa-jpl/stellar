import * as React from 'react';
import { SVGProps } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M11.757 4.26a.826.826 0 0 0-1.17 0L8.125 6.723a.165.165 0 0 1-.234 0L5.43 4.26a.827.827 0 1 0-1.17 1.17l2.463 2.463a.166.166 0 0 1 0 .234L4.26 10.592a.828.828 0 0 0 0 1.17.84.84 0 0 0 1.17 0L7.89 9.3a.165.165 0 0 1 .234 0l2.463 2.462a.841.841 0 0 0 1.17 0 .828.828 0 0 0 0-1.17L9.296 8.127a.166.166 0 0 1 0-.234l2.46-2.464a.827.827 0 0 0 0-1.17Z"
    />
  </svg>
);
export default SvgClose;
