import * as React from 'react';
import { SVGProps } from 'react';
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.206 2.083C9.778.621 12.263.641 13.81 2.13a3.83 3.83 0 0 1 .049 5.5l-.012.013-1.81 1.742a4.08 4.08 0 0 1-3.112 1.121 4.05 4.05 0 0 1-2.921-1.541 1 1 0 0 1 1.579-1.227 2.05 2.05 0 0 0 1.48.773 2.08 2.08 0 0 0 1.586-.566l1.804-1.736a1.83 1.83 0 0 0-.03-2.638 2.1 2.1 0 0 0-2.85-.028l-1.032.988a1 1 0 1 1-1.383-1.445l1.038-.993z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.964 6.155a4.08 4.08 0 0 1 3.111-1.12 4.05 4.05 0 0 1 2.921 1.541 1 1 0 1 1-1.579 1.227 2.05 2.05 0 0 0-1.48-.773 2.08 2.08 0 0 0-1.586.566L3.547 9.332a1.83 1.83 0 0 0 .03 2.638c.78.75 2.053.763 2.85.029l1.024-.987a1 1 0 0 1 1.387 1.44l-1.031.994-.013.012C6.222 14.92 3.737 14.9 2.19 13.411a3.83 3.83 0 0 1-.049-5.5l.012-.013z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLink;