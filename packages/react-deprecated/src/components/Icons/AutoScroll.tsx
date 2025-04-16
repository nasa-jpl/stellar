import * as React from 'react';
import { SVGProps } from 'react';
const SvgAutoScroll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={16} fill="none" viewBox="0 0 18 16" {...props}>
    <path fill="currentColor" fillRule="evenodd" d="M10 5H8v6h2zM7 4v8h4V4z" clipRule="evenodd" />
    <path stroke="currentColor" strokeWidth={1.5} d="M5 5 2 8l3 3m8-6 3 3-3 3" />
  </svg>
);
export default SvgAutoScroll;
