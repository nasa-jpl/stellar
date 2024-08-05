import * as React from 'react';
import { SVGProps } from 'react';
const SvgMagicEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={14} fill="none" viewBox="0 0 15 14" {...props}>
    <path
      fill="currentColor"
      d="M14.5 8.5a.5.5 0 0 1-.5.5h-1v1a.5.5 0 0 1-1 0V9h-1a.5.5 0 0 1 0-1h1V7a.5.5 0 1 1 1 0v1h1a.5.5 0 0 1 .5.5ZM3 3.25h.75V4a.5.5 0 1 0 1 0v-.75h.75a.5.5 0 0 0 0-1h-.75V1.5a.5.5 0 0 0-1 0v.75H3a.5.5 0 1 0 0 1ZM10.5 11H10v-.5a.5.5 0 1 0-1 0v.5h-.5a.5.5 0 0 0 0 1H9v.5a.5.5 0 0 0 1 0V12h.5a.5.5 0 1 0 0-1Zm-.144-4.644L3.706 13a.994.994 0 0 1-1.412 0L1 11.706a.994.994 0 0 1 0-1.412L10.294 1a1.006 1.006 0 0 1 1.412 0L13 2.294a.995.995 0 0 1 0 1.412l-2.644 2.65ZM8.706 4 10 5.294 12.294 3 11 1.706 8.706 4Z"
    />
  </svg>
);
export default SvgMagicEraser;
