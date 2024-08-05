import * as React from 'react';
import { SVGProps } from 'react';
const SvgSortAscending = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="m9.207 4.793 2.829-2.829 2.828 2.829H9.207Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.036 11.036V1.964m0 0L9.207 4.793h5.657l-2.828-2.829Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 15c0 .552-.416 1-.929 1H.93C.416 16 0 15.552 0 15s.416-1 .929-1H12.07c.513 0 .929.448.929 1ZM9 11c0 .414-.318.75-.71.75H.71c-.392 0-.71-.336-.71-.75s.318-.75.71-.75h7.58c.392 0 .71.336.71.75ZM5 7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1h4A.5.5 0 0 1 5 7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSortAscending;
