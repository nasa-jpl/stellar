import * as React from 'react';
import { SVGProps } from 'react';
const SvgSortDescending = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="m9.23 11.96 2.828 2.828 2.828-2.828H9.23" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.058 5.717v9.071m0 0L9.229 11.96h5.657z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.022 1.753c0-.553-.416-1-.928-1H.95c-.513 0-.929.447-.929 1s.416 1 .929 1h11.143c.512 0 .928-.448.928-1M9.022 5.753c0-.415-.318-.75-.71-.75H.732c-.392 0-.71.335-.71.75 0 .414.318.75.71.75h7.58c.392 0 .71-.336.71-.75M5.022 9.753a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSortDescending;
