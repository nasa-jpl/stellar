import * as React from 'react';
import { SVGProps } from 'react';
const SvgCursorDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m9.84 9.516 4.646-1.651L2 1l3.64 13.776 2.726-4.108 3.264 4.177 1.474-1.152-3.263-4.177Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCursorDefault;
