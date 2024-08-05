import * as React from 'react';
import { SVGProps } from 'react';
const SvgLetterSpacing = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M9.265 3.526v6.121a.765.765 0 1 1-1.53 0v-6.12H5.857a.765.765 0 1 1 0-1.53h5.286a.765.765 0 0 1 0 1.53H9.265Z"
    />
    <path
      fill="currentColor"
      d="M5.09 11.37a.789.789 0 0 1-.173.256l-.236.228h7.63l-.236-.228a.792.792 0 0 1 1.12-1.12l1.576 1.577a.788.788 0 0 1 .166.26.74.74 0 0 1 0 .6.788.788 0 0 1-.166.26l-1.576 1.576a.792.792 0 0 1-1.12-1.12l.237-.228H4.68l.236.228a.792.792 0 0 1-1.119 1.12l-1.577-1.577a.79.79 0 0 1-.165-.26.789.789 0 0 1 0-.6.79.79 0 0 1 .165-.26l1.577-1.576a.788.788 0 0 1 1.12 0 .789.789 0 0 1 .172.863Z"
    />
  </svg>
);
export default SvgLetterSpacing;
